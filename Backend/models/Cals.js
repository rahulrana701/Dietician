const mongoose = require('mongoose');
const { Schema } = mongoose;

const Calschema = new Schema({
    height: {
        type: String,
        required: [true, 'Please provide your height in cm'],
        maxlength: 50,
    },
    weight: {
        type: String,
        required: [true, 'Please provide your weight in kg'],
        maxlength: 50,
    },
    age: {
        type: String,
        required: [true, 'Please provide your age'],
        maxlength: 50,
    },
    gender: {
        type: String,
        required: [true, 'Please provide your gender'],
        maxlength: 50,
    },
    activityLevel: {
        type: String,
        required: [true, 'Please provide your activity level'],
        maxlength: 50,
    },
    date: {
        type: Date,
        required: [true, 'Please provide the date'],
        default: Date.now,
    },
    createdby: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user'],
    },
});

const Cals = mongoose.model('notcalorie', Calschema);
module.exports = Cals;
