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

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/files', express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes)

app.get('/*', function (req, res) {
  console.log(req.user)
  res.sendFile(path.join(__dirname, '../index.html'))
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

db.sync({force:true})
.then(() =>{
  
app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port 3000");
})

})