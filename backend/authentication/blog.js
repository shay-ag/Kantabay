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
