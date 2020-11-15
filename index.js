const express = require('express')
const { getAllMovies, getMoviesByDir, getMoviesByTitle } = require('./controller/moviesController')

const app = express()

app.get('/movies', getAllMovies)

app.get('/movies/:directors', getMoviesByDir)

app.get('/movies/:title', getMoviesByTitle)


app.listen(2095, () => {
  console.log('Listening on port 2095...') // eslint-disable-line no-console
})
