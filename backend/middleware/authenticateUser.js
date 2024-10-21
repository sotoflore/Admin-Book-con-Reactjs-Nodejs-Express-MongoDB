const jwt = require('jsonwebtoken');
require('dotenv').config( { path: '.env' } );

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json( { message: 'Acceso no autorizado'} );
    }

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if(error){
            return res.status(401).json( { message: 'Token no válido'} );
        }
        req.user = decoded;
        next();
    })
}

module.exports = authenticateUser;