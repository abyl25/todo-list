const jwt = require('jsonwebtoken');
const config = require('../config/secret');

exports.generateToken = (user) => {
    const {_id, firstName, lastName, email} = user;
    const payload = {
        id: _id,
        firstName,
        lastName,
        email
    };
    
    const token = jwt.sign(payload, config.secret, { expiresIn: 60 * 2 * 60});
    return token;
}

exports.verifyToken = (req, res, next) => { 
    // console.log(req.headers);
    // const token = req.headers['x-access-token']; 
    const bearerHeader  = req.headers['authorization'];
    if (!bearerHeader) {
        return res.status(401).send({ 
            auth: false,
            success: false, 
            message: 'No token provided' 
        });
    }
    
    const bearer = bearerHeader.split(' ');
    const token = bearer[1];
    // console.log('bearer[0]: ' + bearer[0]);
    // console.log('bearer[1]: ' + bearer[1]);

    jwt.verify(token, config.secret, (err, decodedUser) => {
        if (err) {
			return res.status(500).send({ 
                auth: false, 
                success: false, 
                message: 'Failed to authenticate token' 
            });
        }
        console.log("good: ");
        console.log(decodedUser);

        req.user = decodedUser;
		next();
    });
}