const User = require('../models/User');
const express = require('express');
const router = express.Router();
const { getallcal, createcal, getcurrentcal, updatecurrentcal, deletecurrentcal } = require('../controllers/Cals');

router.route('/').post(createcal).get(getallcal);
router.route('/:id').get(getcurrentcal).patch(updatecurrentcal).delete(deletecurrentcal);


module.exports = router;