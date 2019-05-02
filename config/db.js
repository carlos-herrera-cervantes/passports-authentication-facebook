const mongoose = require('mongoose');
const chalk = require('chalk');

const uri = 'mongodb+srv://carlos:d-2611983@blog-data-mosfx.mongodb.net/test?retryWrites=true';
const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
};

mongoose.connect(uri, options).then(() => {
    console.log(chalk.green.inverse('Database connection established'));
}, 
error => console.log(chalk.red.inverse('Unable to connect database due to: ', error)));