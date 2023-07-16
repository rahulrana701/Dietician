const mongoose = require('mongoose');
const baseurl = process.env.DB_URL;

const connectionString = `${baseurl}`;

const connectDB = () => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(console.log('mongoose connected sucessfully'));
}
module.exports = connectDB;