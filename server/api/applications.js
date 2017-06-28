const router = require('express').Router();
const Application = require('../models').Application

router.get('/', (req, res) => {
	Application.findAll()
	.then( foundApplications => {
		res.send(foundApplications)
	})
})

module.exports = router