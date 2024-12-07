const express = require('express');
const morgan = require('morgan');
const app = express();

// Set up views and middleware
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));

// Define routes
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

// Export the Express app
module.exports = app;
