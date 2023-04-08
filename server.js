// Import express
const express = require('express');

// Import routes
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

// Initialize an app object/instance of express
const app = express();

// Import index.js file
// const api = require('./public/assets/js/index');

// Import path so that the routes can have the shortened relative file name
// const path = require('path');

// PORT variable (process environment PORT is for Heroku)
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// this is needed for css styling to work
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Function for app port
app.listen(PORT, () => {
   return console.log(`App listening at http://localhost:${PORT} 🚀`)
})



// GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for note page --> WHAT is the route link?
// app.get('/notes', (req, res) => {
//  return res.sendFile(path.join(__dirname, '/public/notes.html'))
// });

// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );