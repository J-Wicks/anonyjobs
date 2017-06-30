const router = require('express').Router();
const User = require('../models').User;
const Company = require('../models').Company;
const Promise = require('bluebird')

router.post('/', (req, res, next) => {
	console.log(req.body)
	User.findOne({where:{
		email: req.body.email
	}})
	.then( user => {
		
		if(user.id){
			req.login(user, err =>{
				if(err) next(err)
				else res.json(user)
			})

		}
		else {
			Company.findOne({where:
				{
				HRemail:req.body.email
				}
			})
			.then( user =>{
			req.login(user, err =>{
				if(err) next(err)
				else res.status(201).send(user)
			})
			console.log('Req.User ', req.user)

	})
		}
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

router.get('/logout', (req, res, next) => {
	req.logout()
	res.send('Success')
})


module.exports = router