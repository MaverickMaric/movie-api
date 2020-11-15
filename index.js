const express = require('express')
const movies = require('./movies')
const { getAllMovies } = require('./controller/moviesController')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:directors', (request, response) => {
  const { directors } = request.params

  const foundDir = movies.filter((movie) => movie.directors === directors)

  return response.send(foundDir)
})

app.get('/movies/:title', (request, response) => {
  const { title } = request.params

  const foundTitle = movies.filter((movie) => movie.title === title)

  return response.send(foundTitle)
})


app.listen(2095, () => {
  console.log('Listening on port 2095...') // eslint-disable-line no-console
})
