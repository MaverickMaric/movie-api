const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviesByTitleOrDir = (request, response) => {
  const { input } = request.params

  // eslint-disable-next-line max-len
  const foundMovie = movies.filter((movie) => (movie.directors.toString().toLowerCase().includes(input) || movie.title.toLowerCase().includes(input)))

  return response.send(foundMovie)
}

const saveNewMovie = (request, response) => {
  const { title, directors, releaseDate, rating, runTime, genres } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    // eslint-disable-next-line max-len
    return response.status(400).send('The following fields are required: title, directors, release date, rating, run time, genres')
  }

  const newMovie = { title, directors, releaseDate, rating, runTime, genres }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMoviesByTitleOrDir, saveNewMovie }

