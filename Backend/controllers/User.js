const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtsecret = process.env.DB_JWTSECRET;

const signup = async (req, res) => {
    let success = false;
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400).json('Please provide all the required credentials');
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const tempuser = { name, email, password: hashpassword };

    const user = await User.create({ ...tempuser });
    success = true;
    const token = jwt.sign({ userId: user._id, name: user.name }, jwtsecret);
    res.status(200).json({ success, user, token });
};

const login = async (req, res) => {
    let success = false;
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json('Please provide all the required credentials');
        return;
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(400).json('User does not exist');
        return;
    }

    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
        res.status(400).json('Please enter the correct password');
        return;
    }

    const token = jwt.sign({ userId: user._id, name: user.name }, jwtsecret);
    success = true;
    res.status(200).json({ success, user, token });
};

module.exports = {
    signup,
    login,
};
