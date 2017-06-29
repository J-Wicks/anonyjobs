const router = require('express').Router();
const Company = require('../models').Company

router.get('/', (req, res) => {
	Company.findAll()
	.then(foundCompanies => {
		res.send(foundCompanies)
	})
})

module.exports = router