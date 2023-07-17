const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

const connectdb = require('./config/conn');

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});



const start = async (url) => {
  try {
    await connectdb(url);
    app.listen(port, () => {
      console.log(`Server started at ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};