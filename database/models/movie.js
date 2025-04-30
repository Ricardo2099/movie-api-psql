'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here si agregas relaciones en el futuro
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    year: DataTypes.INTEGER,
    synopsis: DataTypes.TEXT,
    imageUrl: DataTypes.STRING // <--- Aquí añadimos el nuevo campo
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
