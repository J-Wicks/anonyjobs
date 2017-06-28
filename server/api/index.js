const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/applications', require('./applications'));
router.use('/companies', require('./companies'));
router.use('/postings', require('./postings'));
router.use('/login', require("./login"));
// router.use('/auth', require('./auth'));

router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;