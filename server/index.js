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
const secrets = require('../secrets')
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy


app.use(morgan('dev'));

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

passport.serializeUser((user, done) => {
	console.log("SERIALIZING")
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
	console.log("DESERIALIZING")
  Users.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

console.log(secrets.CLIENT_ID, secrets.CLIENT_SECRET)

passport.use(new LinkedInStrategy({
	clientID: secrets.CLIENT_ID,
	clientSecret: secrets.CLIENT_SECRET,
	callbackURL: 'http://127.0.0.1:3000/home/signin-linkedin',
	scope: ['r_emailaddress', 'r_basicprofile']
}, function(accessToken, refreshToken, profile, done){

	Users.create({
		email: profile.emails[0].values,
		firstName: profile.name.givenName,
		lastName: profile.name.familyName
	})
	.then(() =>{
		    return done(null, profile);
	})


}))


//setting up bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//public routing
app.use('/files', express.static(path.join(__dirname, '../public')));

//api routes
app.use('/home/signin-linkedin', apiRoutes);
app.use('/api', apiRoutes)

//serve up the html
app.get('/*', function (req, res) {
  console.log(req.user)
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync()
.then(() =>{

app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000");
})

})
