require('./config/db');

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const chalk = require('chalk');
const routes = require('./api/routes/routes');

/**
 * @CONFIG
 */

const port = process.env.PORT || 3000;
const app = express();

app.get('/success', (request, response) => response.send('You have successfully logged in'));
app.get('/error', (request, response) => response.send('Error loggging in'));

/**
 * @MIDDLEWARES
 */

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * @PASSPORT_CONFIG
 */

 app.use(passport.initialize());
 app.use(passport.session());

 require('./config/passport')(passport);

/**
 * @END_POINTS
 */

 routes(app, passport);

 /**
  * @LISTEN
  */

app.listen(port, () => console.log(chalk.blue.inverse(`Server running at port ${port}`)));