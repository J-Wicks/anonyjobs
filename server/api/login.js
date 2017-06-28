const router = require('express').Router();
const Users = require('../models').User;
const Promise = require('bluebird')

router.post('/login', (req, res, next) => {
	res.send('whats up')
});


module.exports = router