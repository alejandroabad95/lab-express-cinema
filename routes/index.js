const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model')
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */

router.get('/movies', (req, res) => {


    Movie
        .find()
        .then(moviesFromDB => {
            res.render('movies', { movies: moviesFromDB })
        })
        .catch(err => console.log(err))
})



/* GET movies details */


module.exports = router;
