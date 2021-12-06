const express = require('express')
const path = require('path')

const app = express()
const port = 8088

app.set('view engine', 'ejs')
  .set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Now server is running on ${port}`)
})
