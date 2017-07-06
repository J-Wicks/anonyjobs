const router = require('express').Router();
const Application = require('../models/Application')
const Posting = require('../models/Posting')
const Education = require('../models').Education
const User = require('../models').User
const Experience = require('../models').Experience

router.get('/', (req, res) => {
	Application.findAll({
		include: [
			{
				model: User, include:[
				{model: Education}, {model: Experience}
				]
			}
		]
	})
	.then( foundApplications => {
		res.send(foundApplications)
	})
})

router.post('/test', (req, res) => {
	console.log('on server with', req.body.coverLetter)
	Application.create({
		coverLetter: req.body.coverLetter,
		UserId: req.body.userId
	})
	.then(createdApp => {
		createdApp.setPosting(req.body.postingId)
		res.send(createdApp)
	})

})

module.exports = router
