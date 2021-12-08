import express from 'express';
import uniqid from 'uniqid'
import { movies, movieReviews, movieDetails } from './moviesData';

const router = express.Router(); 
router.get('/', (req, res) => {
    res.json(movies);
});

//get movie details
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    if (movieDetails.id ==id) {
        res.status(200).json(movieDetails);
    } else {
        res.status(404).json({
            message: 'Unable to find the movie with id: '+ id,
            id,
            status_code: 404
        });
    }
});

// get movie reviews
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    if (movieReviews.id == id) {
        res.status(200).json(movieReviews);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

// post movie review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (movieReviews.id == id) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        movieReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

export default router;