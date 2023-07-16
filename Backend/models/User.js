const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        maxlength: 50,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
    },

})

const User = mongoose.model('notuser', UserSchema);
module.exports = User;