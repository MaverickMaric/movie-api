const express = require('express')
const movies = require('./movies')

const app = express()

app.get('/', (request, response) => {
  return response.send(movies)
})

app.listen(2095, () => {
  console.log('Listening on port 2095...') // eslint-disable-line no-console
})
