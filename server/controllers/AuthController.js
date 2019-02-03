const bcrypt = require('bcryptjs');
const _token = require('../services/token');
const User = require('../models/User');

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({message: 'email or password is empty'});
    }

    User.findOne({email: email}, (err, user) => {
        if (err) {
            return res.status(500).send(err);
        }  
        if (!user) {
            return res.status(404).send('User not found');
        }
        if (user) {
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) {
                return res.status(401).json({ auth: false, token: null, message: 'Incorrect Password' })
            }
            //const token = _token.generateToken(user);
            res.status(200).json({ 
                auth: true, 
                token: _token.generateToken(user)
            });
        }
    })
}

exports.signup = (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    if (!email || !password || !firstName || !lastName) {
        return res.status(400).json({message: 'Email, password, first name and last name should be provided'});
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

        User.save(newUser).then(user => {
            res.status(201).json({
                auth: true,
                token: _token.generateToken(user),
                message: 'Signed up successfully'
            })
        });
    })
}