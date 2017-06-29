const router = require('express').Router();
const User = require('../models').User;
const Company = require('../models').Company;
const Promise = require('bluebird')

router.post('/', (req, res, next) => {
	User.findOne({where:{
		email: req.body.email
	}})
	.then( foundUser =>{
		if(foundUser){
			res.status(200).send(foundUser)
		}
		else return foundUser
	})
	.then( foundUser => {
		return Company.findOne({where:{
			HRemail:req.body.email
		}})
	})
	.then( foundCompany =>{
		console.log(foundCompany)
		res.status(201).send(foundCompany)
	})
});

router.post('/signup', (req, res, next) => {
	User.create(req.body)
	.then( createdUser => {
		res.status(200).send(createdUser)
	})
})

router.post('/signup/employer', (req, res, next) => {
	Company.create(req.body)
	.then( createdCompany => {

		res.status(200).send(createdCompany)
	})
})


module.exports = router