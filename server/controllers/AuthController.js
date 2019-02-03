const bcrypt = require('bcryptjs');
const _token = require('../services/token');
const User = require('../models/User');

const login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'email or password is empty'
        });
    }

    User.findOne({email: email}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }  
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }
        if (user) {
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) {
                return res.status(401).json({ 
                    auth: false, 
                    success: false,
                    token: null, 
                    message: 'Incorrect Password' 
                })
            }
            const token = _token.generateToken(user);
            res.status(200).json({ 
                auth: true,
                success: true,
                token: token,
                message: 'Logged in successfully'
            });
        }
    })
}

const signup = (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({
            success: false,
            message: 'Email, password, first name and last name should be provided'
        });
    }

    User.findOne({email: email}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (user) {
            return res.status(400).send({
                success: false, 
                message: 'Such an email already exists'
            });
        }

        const hashedPassword = bcrypt.hashSync(password.trim(), 10);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password : hashedPassword
        });

        newUser.save().then(user => {
            const token = _token.generateToken(user);
            res.status(201).json({
                auth: true,
                success: true,
                token: token,
                message: 'Signed up successfully'
            })
        });
    })
}

const getMyself = (req, res) => {
	User.findById(req.user.id, (err, user) => {
		if (err) {
			return res.status(500).send("There was a problem finding the user.");
        }
        if (!user) { 
			return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
		res.status(200).json(user);
	});
}

module.exports = {
    login: login,
    signup: signup, 
    getMyself: getMyself
}