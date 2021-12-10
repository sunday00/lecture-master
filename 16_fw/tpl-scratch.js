const express = require('express')
const path = require('path')

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const app = express()
const port = 8088

const datas = require('./data.json')

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UDEMY Express Lecture Practice",
      version: "0.1.0",
      description:
        "I just study",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}/`,
      },
    ],
  },
  apis: ['./tpl-scratch.js'],
};

const specs = swaggerJsdoc(options);

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: true }))
  .use (express.json())
  .use("/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  )

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

/**
 * @swagger
 *  /r/{subreddit}:
 *    get:
 *      tags:
 *        - subreddit
 *      description: 해당 서브레딧 목록
 *      produces:
 *        - text/html
 *      parameters:
 *        - in: path
 *          name: subreddit
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: 해당서브레딧 데이터 목록 성공
 */
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
