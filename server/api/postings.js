const router = require('express').Router();
const Posting = require('../models').Posting

router.get('/', (req, res) => {
	Posting.findAll()
	.then(foundPostings => {
		res.send(foundPostings)
	})
})

router.get('/:postingId', (req, res) => {
	Posting.findById(req.params.postingId)
	.then(foundPosting => {
		res.send(foundPosting)
	})
})

router.post('/', (req, res) => {
	Posting.create(req.body)
	.then( createdPosting => {
		res.send(createdPosting)
	})
})

module.exports = router
