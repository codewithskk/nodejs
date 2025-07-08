const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Hello welcome to the Home page')
})
app.get('/about', (req, res) => {
  res.send('Hello welcome to the about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

