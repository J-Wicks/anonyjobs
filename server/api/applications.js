const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('get route applications')
})

module.exports = router