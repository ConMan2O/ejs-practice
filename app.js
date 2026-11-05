import express from 'express';
// Create an instance of the Express application
const app = express();

// Set the port number for the server
const PORT = 3010; // Choose an available port number

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Makes the static files in public folder available to the browser 
app.use(express.static('public'));

// Define a default "route" ('/')

app.get('/', (req, res) => {

    const person = { name: 'Donald Duck', occupation: 'plumber', 
    favoriteColor: 'blue' };

    res.render('home', { person });

});

// Define a route for friends ('/friends')
app.get('/friends', (req, res) => {


    const friends = [ 'Mickey', 'Goofy', 'Minnie', 'Daisy' ];

    res.render('friends', { friends });

});

// Define a route for movies ('/movies')
app.get('/movies', (req, res) => {


    const movies = [ 'Gladiator', 'Inception', 'Interstellar', 'Return of the King' ];

    res.render('movies', { movies });

});

// Start the server at the previous port number
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));