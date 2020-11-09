const { validationResult } = require('express-validator');
const { check } = require('express-validator');


exports.validateRequest = [
        check('firstName')
        .notEmpty()
        .withMessage('El Nombre es requerido'),
        check('lastName')
        .notEmpty()
        .withMessage('El Apellido es requerido'),
        check('email')
        .isEmail()
        .notEmpty()
        .withMessage('el email es requerido'),
        check('password')
        .isLength({min: 6})
        .withMessage('la contraseña debe ser de al menos 6 caracteres')
]

exports.validateSigninRequest = [
    check('email')
    .isEmail()
    .notEmpty()
    .withMessage('un email valido es requerido'),
    check('password')
    .isLength({min: 6})
    .withMessage('la contraseña debe ser de al menos 6 caracteres')
]

exports.isRequestValidated= ( req, res, next ) => {
    const errors = validationResult(req)
    if(errors.array().length > 0){
        return res.status(400).json({ error: errors.array()[0]})
    }
    next()
}