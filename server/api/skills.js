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

//
// router.post('/', (req, res) => {
// 	console.log(req.body)
// 	Posting.create(req.body)
// 	.then( createdPosting => {
// 		res.send(createdPosting)
// 	})
// })
//
module.exports = router
