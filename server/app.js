const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

const connectdb = require('./config/conn');
const userRouter=require('./routes/createUser')

app.use(express.json())
app.use('/api',userRouter);

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});








const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server started at ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();