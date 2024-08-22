// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path to the views
app.set('views', './views');

// Create a route for the home page
app.get('/', (req, res) => {
    res.render('home');
});

// Create a route for the comments page
app.get('/comments', (req, res) => {
    const comments = [
        { name: 'John', comment: 'I am a comment' },
        { name: 'Jane', comment: 'I am another comment' },
        { name: 'Joe', comment: 'I am yet another comment' }
    ];
    res.render('comments', { comments: comments });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Create a route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// Create a route for the contact page
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Create a route for the 404 page
app.use((req, res) => {
    res.status(404).render('404');
});