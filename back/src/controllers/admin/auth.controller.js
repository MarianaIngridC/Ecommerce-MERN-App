const User = require('../../models/user');
const jwt = require('jsonwebtoken');
// desc 
exports.signup = (req, res) => {
        User.findOne({ email: req.body.email})
        .exec((error, user) => {
            if(user) return res.status(400).json({
                message: 'El email ya se encuentra registrado'
            });
    
            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString(),
                role: 'admin'
            })
            _user.save((error, data) => {
                if(error){
                    return res.status(400).json({
                        message:' Algo salio mal'
                    })
                }
                
                if(data){
                    return res.status(201).json({
                        user: data
                    })
                }
            })
        })
    }

    exports.signin = (req, res) => {
        User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if(error){
                return res.status(400).json({
                    message:' Algo salio mal'
                })
            }
            if(user){
                if(user.authenticate(req.body.password) && user.role === 'admin'){
                    // generate a toke for _id adn the role  
                    const token =  jwt.sign({_id: user._id, role: user.role}, 'seecret',{ expiresIn:'1d'})
                    const { firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                        token,
                        user:{
                            firstName, lastName, email, role, fullName
                        }
                    })
                } else {
                    return res.status(400).json({
                        message:'Contraseña invalida'
                    })
                }
            } else {
                return res.status(400).json({
                    message:' Algo salio mal'
            })
            }
        })
    }