const User = require('../models/User');
const express = require('express');
const router = express.Router();
const { getallcal, createcal, getcurrentcal, updatecurrentcal, deletecurrentcal } = require('../controllers/Cals');

router.route('/').post(createcal).get(getallcal);

module.exports = router;