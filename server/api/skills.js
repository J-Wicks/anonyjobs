const router = require('express').Router();
const Skill = require('../models/').Skill;

router.get('/', (req, res) => {
	Skill.findAll(
		{
		order: [['category', 'ASC']]
	}
)
	.then(foundSkills => {
		res.json(foundSkills)
	})
})

module.exports = router
