import express from 'express';
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

export default router;