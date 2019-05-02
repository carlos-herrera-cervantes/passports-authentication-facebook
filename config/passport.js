const FacebookStrategy = require('passport-facebook').Strategy;

const User = require('../api/models/user');

module.exports = passport => {
    /** @region_snippet_Serialize */
    passport.serializeUser((user, done) => done(null, user.id));

    /** @region_snippet_Deserialize */
    passport.deserializeUser((id, done) => {
        User.findById(id, (error, user) => done(error, user));
    });
    /** @endregion */

    /** @region_snippet_FacebookStrategy */
    passport.use('facebook', new FacebookStrategy({
        clientID: 'secret',
        clientSecret: 'secret',
        callbackURL: 'http://localhost:3000/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'emails']
    },
    (accessToken, refreshToken, profile, done) => {
        let newUser = new User();
        newUser.facebook.email = profile.emails[0].value;
        newUser.facebook.fullName = profile.displayName;

        User.findOne({ email: newUser.facebook.email }, (error, user) => {
            if (!user) {
                newUser.save((error, newUser) => {
                    if (error) {
                        return done(error);
                    }

                    done(null, newUser);
                });
            }
            else {
                done(null, user);
            }
        });
    }));
    /** @endregion */
};
