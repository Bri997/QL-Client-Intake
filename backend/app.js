const express = require('express')
const app = express()

const port = 8080

app.get('/api/hello', (req, res) => res.send('hey'))

app.listen(port, () => {
  console.log('App listening on port 8080!')
})
