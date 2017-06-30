const router = require('express').Router();
const User = require('../models').User;
const Experience = require('../models').Experience;
const Education = require('../models').Education;


router.get('/', (req, res) => {
	User.findAll()
	.then(foundUsers => {
		res.send(foundUsers)
	})
})

router.post('/', (req, res) => {
	console.log('in post route', req)
	// User.create(req.body)
	// .then (createdUser => {
	// 	res.send(createdUser)
	// })
	res.send('thanks')
})

router.post('/addexperience', (req, res) => {
	let experience = req.body.experience;
	let userId = req.body.userId;
	let createdExperience;
	Experience.create(experience)
	.then(returnedExperience => {
		createdExperience = returnedExperience;
		return User.findById(userId)
	})
	.then(foundUser => {
		return foundUser.addExperience(createdExperience)
	})
	.then(() => {
		res.json(createdExperience)
	})
})


router.post('/addEducation', (req, res) => {
	let education = req.body.education;
	let userId = req.body.userId;
	let createdEducation;
	Education.create(education)
	.then(returnedEducation => {
		createdEducation = returnedEducation;
		return User.findById(userId)
	})
	.then(foundUser => {
		return foundUser.addEducation(createdEducation)
	})
	.then(() => {
		res.json(createdEducation)
	})
})


router.get('/:id', (req, res) => {
	User.findById(+req.params.id)
	.then(foundUser => {
		res.json(foundUser)
	})
})

module.exports = router
