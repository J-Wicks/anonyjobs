const router = require('express').Router();
const User = require('../models').User;
const Experience = require('../models').Experience;
const Education = require('../models').Education;
const Skill = require('../models').Skill;
const UserSkill = require('../models').UserSkill


router.get('/', (req, res) => {
	User.findAll()
	.then(foundUsers => {
		res.send(foundUsers)
	})
})

router.post('/', (req, res) => {
	res.send('thanks')
})

router.post('/setSummary', (req, res) => {
	let summary = req.body.summary;
	let id = req.body.userId
	User.findById(id)
	.then(foundUser => {
		foundUser.update({
			summary: summary
		})
	})
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
		return User.findById(userId, {
			include: [{model: Experience}, {model: Skill}, {model: Education}]
		})
	})
	.then(returnedUser => {
		res.json(returnedUser)
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
		return User.findById(userId, {
			include: [{model: Education}]
		})
	})
	.then(returnedUser => {
		res.json(returnedUser)
	})
})

router.post('/addskills', (req, res) => {
	let skills = req.body.skills;
	let userId = req.body.userId
	let createdEducation;
	let skillPromiseArray;
	let currentUser;
	User.findById(userId)
	.then(foundUser => {
		skillPromiseArray = skills.map(skill => {
			return Skill.findOne({where: {
				category: skill.category,
				name: skill.name
			}})
			.then(foundSkill => {
				foundUser.addSkill(foundSkill)
			})
		})
		return Promise.all(skillPromiseArray)
	})
	.then(() => {
		return User.findById(userId, { include: [{model: Education}, {model: Experience}, {model: Skill}]
		})
	})
	.then(foundUser => {
		res.json(foundUser)
	})
})



router.get('/:id', (req, res) => {
	User.findById(+req.params.id, { include: [{model: Education}, {model: Experience}, {model: Skill}]
	})
	.then(foundUser => {
		res.json(foundUser)
	})
})

router.get('/:id/education', (req, res) => {
	User.findById(req.params.id, {
		include: [
			{model: Education}, {model: Experience}
		]
	})
	.then(foundUser => {
		res.json(foundUser)
	})
})

router.get('/:id/experience', (req, res) => {
	User.findById(req.params.id, {
		include: [
			{model: Experience}, {model: Education}
		]
	})
	.then(foundUser => {
		res.json(foundUser)
	})
})

module.exports = router
