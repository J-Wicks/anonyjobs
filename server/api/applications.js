const router = require('express').Router();
const Application = require('../models/Application')
const Posting = require('../models/Posting')
const PythonShell = require('python-shell')

const options = { pythonPath: __dirname }
const pyshell = new PythonShell('/server/machineLearning/ml.py', options, err => {
  if (err) throw err
})

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
  res.send(mlCheck(res.body.coverLetter))
})

module.exports = router

const mlCheck = application => {
  let predictions = ''
  pyshell.send(application)
  pyshell.on('message', message => {
    predictions = message
  })
  pyshell.end(err => {
    if (err) throw err
    return predictions
  })
}
