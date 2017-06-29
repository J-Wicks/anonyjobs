const router = require('express').Router();
const User = require('../models/User')

router.get('/', (req, res) => {
	res.send('get route users')
})

router.get('/:id', (req, res) => {
	// res.send(+req.params.id)
	User.findById(+req.params.id)
	.then(foundUser => {
		res.json(foundUser)
	})
})

module.exports = router
