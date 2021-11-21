const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const uuid = require('uuid');
const config = require('../config/appconfig');
const Logger = require('../utils/logger.js');

const logger = new Logger();
const app = express();
app.set('config', config); // the system configrationsx
app.use(bodyParser.json());
app.use(require('method-override')());

app.use(compression());
app.use(cors());
const swagger = require('../utils/swagger');


process.on('SIGINT', () => {
	logger.log('stopping the server', 'info');
	process.exit();
});
