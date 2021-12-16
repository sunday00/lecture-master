const express = require('express')
const path = require('path')

const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")

const {v4: uuid } = require('uuid')

const  methodOverride = require('method-override')

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
  .use (methodOverride((req, res) => {
    if ('_method' in req.body) return req.body._method
  }))
  .use("/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  )

app.set('view engine', 'ejs')
  .set('views', path.join(__dirname, '/views'))

let comments = [
  {
    id:uuid(),
    username: 'Todd',
    comment: 'lol that is so funny!'
  },
  {
    id:uuid(),
    username: 'Skyler',
    comment: 'Yhe, I\'d like to go birdwatching with my dod'
  },
  {
    id:uuid(),
    username: 'Sk8erBoi',
    comment: 'plz, delete your account Todd...'
  },
  {
    id:uuid(),
    username: 'onlysayswoof',
    comment: 'woof woof woof!'
  },
]

app.get('/comments', (req, res) => {
  res.render('comments/index', {
    comments
  })
})

app.get('/comments/new', (req, res) => {
  res.render('comments/form')
})

app.post('/comments', (req, res) => {
  const { username, comment } = req.body
  // comments.push({ id: comments[comments.length - 1].id + 1, username, comment })
  comments.push({ id: uuid(), username, comment })
  res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
  const {id} = req.params
  // const comment = comments.find(c => c.id === parseInt(id))
  const comment = comments.find(c => c.id === id)
  res.render('comments/index', {
    comments: comment ? [ comment ] : []
  })
})


app.get('/comments/:id/edit', (req, res) => {
  const {id} = req.params
  // const comment = comments.find(c => c.id === parseInt(id))
  const comment = comments.find(c => c.id === id)
  res.render('comments/form', {
    comment: comment ? comment : ''
  })
})

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params
  const comment = comments.find(c => c.id === id)
  comment.comment = req.body.comment
  comment.username = req.body.username

  res.redirect(`/comments/${id}`)
})

app.delete('/comments/:id', (req, res) => {
  const { id } = req.params
  comments = comments.filter(c => c.id !== id)

  res.redirect(`/comments/`)
})

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
