const User = require('../models').User
const Education = require('../models').Education;
const Experience = require('../models').Experience;
var router = require('express').Router();
const passport = require('passport');


router.get('/me', (req, res, next) => {
	let userId = req.user ? Number(req.user.id) : 0
	User.findOne({
		where: {id: userId}, include: [
			{model: Education}, {model: Experience}
		]
	})
	.then((foundUser) => {
		if (foundUser)
		res.send(foundUser)
		else {res.send({})}
	}).catch(next);
});

router.get('/linkedin',
	passport.authenticate('linkedin',
		{ state: 'SOME STATE'  }),
	(req, res, next) => {})


router.get('/', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

module.exports = router
