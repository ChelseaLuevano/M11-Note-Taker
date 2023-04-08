const path = require ('path');
const app = require ('express').Router()


//  GET Route for homepage
//  app.get('/', (req, res) =>
//    res.sendFile(path.join(__dirname, '/public/index.html'))
//  );
 
 // GET Route for note page --> WHAT is the route link?
 app.get('/notes', (req, res) => {
   res.sendFile(path.join(__dirname, '../public/notes.html'))
 });
 
 // Wildcard route to direct users to a home page
 app.get('*', (req, res) =>
   res.sendFile(path.join(__dirname, '../public/index.html'))
 );

 
 module.exports = app