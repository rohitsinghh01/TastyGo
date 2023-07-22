const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectdb = require('./config/conn');
const userRouter = require('./routes/createUser');

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONT_END_URL,
    methods: ['POST', 'GET'],
  })
);
app.use('/api', userRouter);

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
