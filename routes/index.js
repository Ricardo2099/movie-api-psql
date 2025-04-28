const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/movies', controller.getMovies);
router.post('/movies', controller.createMovie);
router.delete('/movies/:id', controller.deleteMovie);

module.exports = router;
