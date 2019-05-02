const routes = (app, passport) => {
    app.get('/auth/facebook', (passport.authenticate('facebook', { scope: 'email' })));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirecto: '/error' }),
     (request, response) => {
         response.redirect('/success');
    });
};

module.exports = routes;