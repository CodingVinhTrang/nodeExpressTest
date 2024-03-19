//IMPORT PACKAGE
const express = require('express');

//IMPORTING express Router
//This is method is built into express and it allows us to chain(link) directories the way we want.
// ex. http://localhost:4000/movies
// ex. https://localhost:4000/directors
const router = express.Router();

router.use('/movies', require('./api/movieroutes'))
router.use('/directors', require('./api/directorroutes'))


module.exports = router;