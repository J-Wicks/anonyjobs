const router = require('express').Router();
const Application = require('../models/Application')
const Posting = require('../models/Posting')
const spawn = require('child_process').spawn
const Promise = require('bluebird')

const mlScriptPath = '../machineLearning/ml.py'
const py = spawn('python', [mlScriptPath])

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
  promisifiedMlCheck(req.body.coverLetter)
  .then(predictions => {
    res.send(predictions)
  })
  .catch(console.error)
})

module.exports = router

// Send the application to the Python script
// and return the predictions
const mlCheck = (application) => {
  let predictions = []
  py.stdout.on('data', data => {
    console.log(data)
    predictions = data
  })
  py.stdout.on('end', end => {
    return predictions
  })
  py.stdin.write(JSON.stringify(application))
  py.stdin.end()
}

promisifiedMlCheck = Promise.promisify(mlCheck)
