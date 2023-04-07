// import express
const express = require('express');

// Initialize an app object/instance of express
const app = express();

// PORT variable
const PORT = 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function for app port
app.listen(PORT, () => {
// determine what code to in this

})


// define routes for appliction with path & callback function 
