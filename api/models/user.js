const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    facebook: {
        fullName: String,
        email: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
});

module.exports = mongoose.model('User', User);