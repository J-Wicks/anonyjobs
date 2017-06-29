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
	Application.create(req.body.coverLetter)
	.then(createdApp => {
		return createdApp.setPosting(req.body.postingId)
	})
	.then(() => {
		return Posting.findById(req.body.postingId)
	})
	.then(foundPosting => {
		return foundPosting.setUser(req.body.userId)
	})
	.then(() => {
		return Posting.findByid(req.body.postingId)
	})
})

module.exports = router
