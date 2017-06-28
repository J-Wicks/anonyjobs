const router = require('express').Router();
const Posting = require('../models').Posting

router.post('/', (req, res) => {
	console.log(req.body)
	Posting.create(req.body)
	.then( createdPosting => {
		res.send(createdPosting)
	})
})

module.exports = router