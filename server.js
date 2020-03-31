const express = require('express');
const logger = require('morgan');
const port = process.env.PORT || 3000;

const app = express();

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.listen(port, () => {
	console.log(`Express is listening on port ${port}`);
});

module.exports = app;
