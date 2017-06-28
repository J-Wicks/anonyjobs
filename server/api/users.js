const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('get route users')
})

module.exports = router