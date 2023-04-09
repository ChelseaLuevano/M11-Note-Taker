// Import express
const express = require('express');

// Import routes
const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/htmlroutes');

// Initialize an app object/instance of express
const app = express();

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
