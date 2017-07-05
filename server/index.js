const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');
const apiRoutes = require('./api')
//passport for our db session
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Users = require('./models').User
//new sequelize session for auth
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db: db });

console.log('process env', process.env.HEROKU)

if (!process.env.HEROKU){
var secrets = require('../secrets')
}


const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy


app.use(morgan('dev'));
//setting up bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//using our session for auth
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

//using out passport on our session
app.use(passport.initialize());
app.use(passport.session());

//public routing
app.use(express.static(path.resolve(__dirname, '..', 'public')));
//api routes
app.use('/home/signin-linkedin', apiRoutes);

passport.serializeUser((user, done) => {
	console.log('SERIALIZING')
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
	const numberId = Number(id)
  Users.findById(numberId)
    .then(user => done(null, user))
    .catch(done);
});


passport.use(new LinkedInStrategy({
	// clientID: secrets.CLIENT_ID,
	// clientSecret: secrets.CLIENT_SECRET,
	// callbackURL: 'http://127.0.0.1:3000/home/signin-linkedin',
  clientID: process.env.CLIENT_ID || secrets.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET || secrets.CLIENT_SECRET,
  callbackURL: process.env.HEROKU ? 'https://damp-shelf-63214.herokuapp.com/home/signin-linkedin' : 'http://127.0.0.1:3000/home/signin-linkedin',
	scope: ['r_emailaddress', 'r_basicprofile']
}, function(accessToken, refreshToken, profile, done){
	const _profile = profile._json
	console.log('PROFILE', profile.headline, _profile.industry, _profile.location.name, _profile.summary)
	Users.findOrCreate({
		where: {
			email: profile.emails[0].value,
			firstName: profile.name.givenName,
			lastName: profile.name.familyName,
			headline: _profile.headline,
			industry: _profile.industry,
			location: _profile.location.name,
			summary: _profile.summary
		}
	})
	.then((createdUser) => {
		console.log(createdUser[0])
	    return done(null, createdUser[0]);
	})

}))
//public routing
app.use(express.static(path.join(__dirname, '../public')));

//api routes
app.use('/home/signin-linkedin', apiRoutes);
app.use('/api', apiRoutes)
app.use((req, res, next) =>
  path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next())
app.use('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'index.html'))
});

//serve up the html

app.use(function (err, req, res, next) {
  console.log(__dirname)
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync({force: true})
.then(() => {
  app.listen(process.env.PORT || 3000, function () {
    console.log('listening on port 3000');
  })
})
