const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

exports.generateToken = (user) => {
    const payload = {
        id: user._id
    };
    
    jwt.sign(payload, secret.secret, { expiresIn: 60 * 2 * 60}, (err, token) => {
        if (err) return err;       
        return token;
    });
}

// exports.verifyToken = (user) => {   
// }