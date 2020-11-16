const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMoviesByTitleOrDir, saveNewMovie } = require('./controller/moviesController')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:input', getMoviesByTitleOrDir)

app.post('/', bodyParser.json(), saveNewMovie)

app.listen(2095, () => {
  console.log('Listening on port 2095...') // eslint-disable-line no-console
})
