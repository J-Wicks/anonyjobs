const router = require('express').Router();
const Application = require('../models').Application

router.get('/', (req, res) => {
	Application.findAll()
	.then( foundApplications => {
		res.send(foundApplications)
	})
})

router.post('/', (req, res) => {
	Application.create(req.body.coverLetter)
	.then(createdApp => {
		return createdApp.setPosting(req.body.postingId)
	})
	.then(() => {
		return Posting.findById(req.body.postingId)
	})
	.then(foundPosting => {
		res.status(200).json(foundPosting)
	})
})

module.exports = router
