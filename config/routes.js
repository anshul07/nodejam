var home = require('../app/controllers/home')
  , users = require('../app/controllers/users')
  , auth = require('./middlewares/authorization');

var articleAuth = [auth.requiresLogin, auth.article.hasAuthorization]

module.exports = function(app, passport){

	app.get('/', home.index);
  app.get('/login', users.login);
  app.get('/signup', users.signup);
  app.get('/logout', users.logout);
  app.post('/users', users.create);
  app.post('/users/session',
    passport.authenticate('local', {
      failureRedirect: '/login',
      failureFlash: 'Invalid email or password.'
    }), users.session)
  app.get('/users/:userId', users.show);
  
};
