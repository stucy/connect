// npm package imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// custom imports
const authRoutes = require('./routes/authRoutes');

// app setup
const app = express();
dotenv.config();

// Middleware
app.use(express.static('public'));
app.use(express.json());

// app startup
const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(result => app.listen(PORT))
.catch(err => console.log(err));

// app routes
app.use(authRoutes);