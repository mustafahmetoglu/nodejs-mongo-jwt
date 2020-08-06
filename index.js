const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//IMPORT ROUTES
const authRoute = require('./routes/auth');

dotenv.config();
//CONNECT TO DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo db');
  }
);

//Middlewares
app.use(express.json());

//ROUTE MIDDLEWARES

app.use('/api/user', authRoute);

app.listen(3000, () => {
  console.log('server is up');
});
