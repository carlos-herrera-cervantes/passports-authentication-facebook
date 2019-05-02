const express = require('express');
const bodyParser = require('body-parser');

/**
 * @CONFIG
 */

const port = process.env.PORT || 3000;
const app = express();

/**
 * @MIDDLEWARES
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());