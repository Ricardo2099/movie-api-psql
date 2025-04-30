const { Movie } = require('../database/models');

// Obtener todas las películas
const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva película
const createMovie = async (req, res) => {
  try {
    const { title, director, year, synopsis, imageUrl } = req.body; // <-- incluimos imageUrl
    const movie = await Movie.create({ title, director, year, synopsis, imageUrl }); // <-- también lo guardamos
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar película por ID
const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    await Movie.destroy({ where: { id } });
    res.json({ message: 'Película eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getMovies,
  createMovie,
  deleteMovie
};
