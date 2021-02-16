// npm package imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');

// import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// app setup
const app = express();
dotenv.config();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// app startup
const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
.then(result => app.listen(PORT))
.catch(err => console.log(err));

// app routes
app.use(authRoutes);
app.use(userRoutes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});