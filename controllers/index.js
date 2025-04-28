const { Movie } = require('../database/models');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const { title, director, year, synopsis } = req.body;
    const movie = await Movie.create({ title, director, year, synopsis });
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    await Movie.destroy({ where: { id } });
    res.json({ message: 'Película eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getMovies, createMovie, deleteMovie };
