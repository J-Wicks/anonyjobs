const router = require('express').Router();
const Application = require('../models/Application')
const Posting = require('../models/Posting')

router.get('/', (req, res) => {
	Application.findAll()
	.then( foundApplications => {
		res.send(foundApplications)
	})
})

router.post('/', (req, res) => {
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
