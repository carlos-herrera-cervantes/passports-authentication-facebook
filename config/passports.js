const mongoose = require('mongoose');
const facebookStrategy = require('passport-facebook').Strategy;

const User = require('../api/models/user');

module.exports = passport => {
    /** @region_snippet_Serialize */
    passport.serializeUser((user, done) => done(null, user.id));

    /** @region_snippet_Deserialize */
    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => done(error, user));
    });
    /** @endregion */

    
};