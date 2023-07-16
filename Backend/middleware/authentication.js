const User = require('../models/User');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.DB_JWTSECRET;

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        console.log('Authorization header missing or incorrect format');
        return res.json('Please login or sign up correctly');
    }

    const token = authHeader.split(' ')[1];
    try {
        const payload = jwt.verify(token, jwtsecret);
        req.user = { userId: payload.userId, name: payload.name };
        next();
    } catch (error) {
        console.log('Token verification failed:', error.message);
        return res.json('Please login or sign up correctly');
    }
};

module.exports = auth;
