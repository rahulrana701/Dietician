require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const authmiddleware = require('./middleware/authentication');



app.use(cors());
app.use(express.json());
// const port = process.env.PORT || 5000;
const port = 'https://dietician-pi8g.onrender.com';

const userRoute = require('./routes/User');
const CalorieRoute = require('./routes/Cals');


app.use('/api/v1/user', userRoute);
app.use('/api/v1/calorie', authmiddleware, CalorieRoute);



const start = async () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log(`server listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();