const movies = require('../movies')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMoviesByDir = (request, response) => {
  const { directors } = request.params

  const foundDir = movies.filter((movie) => movie.directors.toString().toLowerCase().includes(directors))

  return response.send(foundDir)
}

const getMoviesByTitle = (request, response) => {
  const { title } = request.params

  const foundTitle = movies.filter((movie) => (movie.title.toLowerCase().includes(title)))

  return response.send(foundTitle)
}

const saveNewMovie = (request, response) => {
  const { title, directors, releaseDate, rating, runTime, genres } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('The following fields are required: title, directors, release date, rating, run time, genres')
  }

  const newMovie = { title, directors, releaseDate, rating, runTime, genres }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMoviesByDir, getMoviesByTitle, saveNewMovie }

