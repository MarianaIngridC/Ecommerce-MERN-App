const router = require('express').Router();
const { signup, signin } = require('../controllers/auth.controller')
const { validateRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');


router.post('/signup', validateRequest, isRequestValidated, signup)
router.post('/signin', validateSigninRequest, isRequestValidated, signin)


module.exports = router;