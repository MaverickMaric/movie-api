const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviesByDir = (request, response) => {
  const { directors } = request.params

  const foundDir = movies.filter((movie) => movie.directors === directors)

  return response.send(foundDir)
}

const getMoviesByTitle = (request, response) => {
  const { title } = request.params

  const foundTitle = movies.filter((movie) => movie.title === title)

  return response.send(foundTitle)
}

module.exports = { getAllMovies, getMoviesByDir, getMoviesByTitle }
