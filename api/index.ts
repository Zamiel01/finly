const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const userRouter = require('../routes/user.route');

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data
app.use(express.json()); // To parse JSON bodies if needed

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(morgan('combined'));

// Database connection
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
require('../lib/dbConnect');

// Use userRouter for routes related to users
app.use('/users', userRouter);

// Static files (like CSS, images)
app.use(express.static('public'));

// Default routes
app.get('/', (req, res) => {
    res.render('index', { message: 'Hello From Node.js' });
});
app.get('/contact', (req, res) => {
    res.render('index', { message: 'The Contact Page' });
});
app.get('/about', (req, res) => {
    res.render('index', { message: 'The About Page' });
});
app.get('*', (req, res) => {
    res.status(404).render('index', { message: 'Not Found' });
});

// Listen on port 3000
app.listen(3001, () => console.log("Server ready on port 3000."));

module.exports = app;
