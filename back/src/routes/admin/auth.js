const router = require('express').Router();
const { signup, signin } = require('../../controllers/admin/auth.controller')
const { validateRequest, validateSigninRequest, isRequestValidated } = require('../../validators/auth');


router.post('/admin/signup',validateRequest, isRequestValidated, signup)
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin)


module.exports = router;