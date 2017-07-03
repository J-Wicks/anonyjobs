const router = require('express').Router();
const Skills = require('../models/').Skills;

router.get('/', (req, res) => {
	Skills.findAll(
		{
		order: [['category', 'ASC']]
	}
)
	.then(foundSkills => {
		res.json(foundSkills)
	})
})

module.exports = router
