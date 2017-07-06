const router = require('express').Router();
const Application = require('../models/Application')
const Posting = require('../models/Posting')
const PythonShell = require('python-shell')
const path = require('path')
const Promise = require('bluebird')

router.get('/', (req, res) => {
	Application.findAll()
	.then( foundApplications => {
		res.send(foundApplications)
	})
})

router.post('/', (req, res) => {
	console.log('on server with', req.body.coverLetter)
	Application.create({
		coverLetter: req.body.coverLetter,
		UserId: req.body.userId
	})
	.then(createdApp => {
		createdApp.setPosting(req.body.postingId)
		res.send(createdApp)
	})

})

router.post('/test', (req, res) => {
  mlCheck(req.body.coverLetter)
  .then(predString => {
    return predString.split(',')
  })
  .then(predictions => {
    res.send(predictions)
  })
  .catch(console.error)
})

module.exports = router

const mlCheck = application => {
  return new Promise((resolve, reject) => {
    const options = {
      pythonPath: '/bin/python3',
      scriptPath: path.join(__dirname, '../machineLearning'),
      args: application
    }
    PythonShell.run('ml.py', options, (err, result) => {
      if (err) reject(err)
      console.log(result[0])
      resolve(result[0])
    })
  })
}
