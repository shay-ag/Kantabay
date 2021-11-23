const express = require("express");
const { addNote, getAllNotes, updateNote } = require("../controllers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const { handleNoteIdParam } = require("../middlewares/noteMiddleware");
const router = express.Router();

router.param("noteId", handleNoteIdParam);

router.post("/add", verifyToken, addNote);
router.put("/update/:noteId", verifyToken, updateNote);
// router.delete("/delete/:noteId", );
router.get("/getallnotes", verifyToken, getAllNotes);

module.exports = router;

// localhost:8000/note/add
// localhost:8000/note/update/:noteId
// localhost:8000/note/update/1
// localhost:8000/note/delete/:noteId
// localhost:8000/note/getallnotes

const express = require("express");
const router = express.Router();

const { signUp, signIn } = require("../controllers/auth");

//SINGUP ROUTE (SENDS TOKEN ON SUCCESSFULL SIGNUP) localhost:8000/auth/signin
router.post("/signup", signUp);
//SINGIN ROUTE (SENDS TOKEN ON SUCCESSFULL SIGNIN) localhost:8000/auth/signup
router.post("/signin", signIn);

// Middleware
module.exports = router;
/* Auth configuration */

const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LichessStrategy = require('passport-lichess');
const User = require('../models/user.model');
const { lichessSignIn } = require('../controllers/user.controller');

const PUB_KEY = process.env.PUBLIC_KEY.replace(/\\n/g, '\n');

const LICHESS_CLIENT_ID = (process.env.NODE_ENV === 'production')
  ? process.env.PROD_LICHESS_CLIENT_ID.replace(/\\n/g, '\n')
  : process.env.DEV_LICHESS_CLIENT_ID.replace(/\\n/g, '\n');

const LICHESS_CLIENT_SECRET = (process.env.NODE_ENV === 'production')
  ? process.env.PROD_LICHESS_CLIENT_SECRET.replace(/\\n/g, '\n')
  : process.env.DEV_LICHESS_CLIENT_SECRET.replace(/\\n/g, '\n');

const configAuth = passport => {
  const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
  };
  
    passport.use(new JwtStrategy(jwtOptions, (jwt_payload, done) => {
      User.findOne({_id: jwt_payload.id}, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }));

  const lichessOptions = {
    clientID: LICHESS_CLIENT_ID,
    clientSecret: LICHESS_CLIENT_SECRET,
    callbackURL: '/api/signin/lichess/callback',
    scope: ['email:read']
  };

  passport.use(new LichessStrategy(lichessOptions, lichessSignIn));

};

module.exports = {
  configAuth
};
module.exports = {
  parser: `@babel/eslint-parser`,
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      experimentalDecorators: true,
    },
  },
  plugins: [`eslint-plugin-prettier`],
  extends: [`eslint:recommended`, `google`, `eslint-config-prettier`],
  rules: {
    "prettier/prettier": `error`,
    curly: [2, `all`],
    "new-cap": `off`,
    "require-jsdoc": `off`,
    semi: `off`,
    "no-unused-expressions": `off`,
    camelcase: `off`,
    "no-invalid-this": `off`,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  ignorePatterns: [`**/models`, `**/repositories`],
  overrides: [
    {
      files: [`*.ts`],
      parser: `@typescript-eslint/parser`,
      plugins: [`@typescript-eslint/eslint-plugin`],
      extends: [`plugin:@typescript-eslint/recommended`],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/no-non-null-assertion": ["off"],
      },
    },
    {
      files: ["**/api/**/*.js", "**/api/**/*.ts"],
      rules: {
        "valid-jsdoc": ["off"],
      },
    },
    {
      files: ["**/api/**/*.ts"],
      rules: {
        "valid-jsdoc": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"],
        "@typescript-eslint/no-var-requires": ["off"],
      },
    },
  ],
}

async function benchmark(name, obj, newObj, exclude = []) {
	const benchmarks = {
		"deep-diff": () => deepDiff.diff(obj, newObj),
		"deep-object-diff": () => deepObjectDiff.detailedDiff(obj, newObj),
		jsdiff: () => diffJson(obj, newObj),
		microdiff: () => microdiff(obj, newObj),
	};
	let times = {};
	for (let benchmark in benchmarks) {
		if (exclude.includes(benchmark)) {
			continue;
		}
		times[benchmark] = [];
		for (let i = 1; i < 10000; i++) {
			let time = hrtime();
			benchmarks[benchmark]();
			times[benchmark].push(hrtime(time)[1]);
		}
		times[benchmark] =
			times[benchmark].reduce((pv, nv) => pv + nv) / times[benchmark].length;
	}
	let output = [];
	let fastest = "";
	for (let time in times) {
		if (!fastest || times[time] < times[fastest]) {
			fastest = time;
		}
	}
	for (let time in times) {
		output.push(
			`${time}: ${Math.round(times[time])}ns - ${
				fastest === time
					? colors.bold(colors.green("Fastest"))
					: `${Math.round((times[time] / times[fastest] - 1) * 100)}% slower`
			}`
		);
	}
	console.log(
		colors.bold(colors.green(`Benchmarks: ${name}\n`)) + output.join("\n")
	);
}

benchmark(
	"Small object (baseline)",
	{
		name: "Testing",
		propertyTwo: "Still testing...",
	},
	{
		name: "TestingChanged",
		propertyThree: "Still testing...",
	}
);
let largeObj = {};
let i = 0;
while (i < 300) {
	let randomString = "";
	for (let characterCount = 0; characterCount < 5; characterCount++) {
		randomString += characters[Math.round(Math.random() * characters.length)];
	}
	if (!largeObj[randomString]) {
		largeObj[randomString] = Math.random() * 100;
		i++;
	}
}
let newLargeObj = {};
for (let randomProperty in largeObj) {
	if (Math.random() > 0.95) {
		newLargeObj[randomProperty] = Math.random() * 100;
	} else if (!Math.random() < 0.975) {
		newLargeObj[randomProperty] = largeObj[randomProperty];
	}
}
benchmark("Large Object (300 properties)", largeObj, newLargeObj);
