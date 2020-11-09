const jwt = require('jsonwebtoken')

exports.requireSignin = (req, res, next) => {
    if(req.headers.authorization){
        
    const token = req.headers.authorization.split(" ")[1]
    const user = jwt.verify(token, "seecret")
    // create a new property in the request, doing this then in each request we can access to all data of the user who is doing the request
    req.user = user;
    } else{
        // message: 'la autorizacion es requerida'
        return res.status(400).json({ message:'la autorizacion es requerida' })
    }
    next()
    // const token = req.headers.authorization.split(" ")[1];
    // const user = jwt.verify(token, process.env.JWT_SECRET)
    // //añade una nueva propiedad a user
    // req.user = user
    
}

exports.adminMiddleware = (req, res, next) => {
    
    if(req.user.role !== 'admin'){
        return res.status(400).json({ message : 'Acceso denegado para el administrador, se requiere estar logueado' })
    }
    next()
}

exports.userMiddleware = (req, res, next) => {

    if(req.user.role !== 'user'){
        return res.status(400).json({ message : 'Acceso denegado para el usuario, se requiere estar logueado' })
    }
    next()
}