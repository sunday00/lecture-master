const express = require('express')
const path = require('path')

const app = express()
const port = 8088

const datas = require('./data.json')

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use (express.json())

app.set('view engine', 'ejs')
  .set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/rand', (req, res) => {
  res.render('random', {
    num: Math.floor(Math.random() * 10) + 1
  })
})

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params
  const data = datas[subreddit]
  
  data ? res.render('subreddit', {
    ...data
  }) : res.send('404')
})

app.get('/cats', (req, res) => {
  res.render('cats', {
    cats: ['Blue','Monty','Rocket','Winston','Nya-on','ChamCi',]
  })
})

app.get('/form/test', (req, res) => {
  res.render('form/test')
})

app.post('/form/tacos', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Now server is running on ${port}`)
})
