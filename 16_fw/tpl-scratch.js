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
app
  .use(express.static(path.join(__dirname, 'public')))
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

/**
 * @swagger
 *  /comments:
 *    get:
 *      tags:
 *        - comments
 *      description: comments
 *      produces:
 *        - application/json
 *      responses:
 *        200:
 *          description: 코멘트 리스트
 */
app.get('/comments', (req, res) => {
  // res.render('comments/index', {
  //   comments
  // })
  res.send(comments)
})

app.get('/comments/new', (req, res) => {
  res.render('comments/form')
})

/**
 * @swagger
 *  /comments:
 *    post:
 *      tags:
 *        - comments
 *      description: comments
 *      requestBody:
 *        required: true
 *        description: 코멘트 내용 - 작성자, 코멘트 내용
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                comment:
 *                  type: string
 *      responses:
 *        200:
 *          description: 새 코멘트가 추가된 리스트
 */
app.post('/comments', async (req, res) => {
  await console.log(req.body)
  const { username, comment } = req.body
  // comments.push({ id: comments[comments.length - 1].id + 1, username, comment })
  await comments.push({ id: uuid(), username, comment })
  // res.redirect('/comments')
  await res.send(comments)
})

/**
 * @swagger
 *  /comments/{id}:
 *    get:
 *      tags:
 *        - comments
 *      description: comments one
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: 코멘트 한개
 */
app.get('/comments/:id', (req, res) => {
  const {id} = req.params
  // const comment = comments.find(c => c.id === parseInt(id))
  const comment = comments.find(c => c.id === id)
  // res.render('comments/index', {
  //   comments: comment ? [ comment ] : []
  // })
  res.send(comment)
})


app.get('/comments/:id/edit', (req, res) => {
  const {id} = req.params
  // const comment = comments.find(c => c.id === parseInt(id))
  const comment = comments.find(c => c.id === id)
  res.render('comments/form', {
    comment: comment ? comment : ''
  })
})

/**
 * @swagger
 *  /comments/{id}:
 *    patch:
 *      tags:
 *        - comments
 *      description: comments edit
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        description: 코멘트 내용 - 작성자, 코멘트 내용
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                comment:
 *                  type: string
 *      responses:
 *        200:
 *          description: 코멘트 수정된 후 리스트
 */
app.patch('/comments/:id', (req, res) => {
  const { id } = req.params
  const comment = comments.find(c => c.id === id)
  comment.comment = req.body.comment
  comment.username = req.body.username

  // res.redirect(`/comments/${id}`)
  res.send(comments)
})

/**
 * @swagger
 *  /comments/{id}:
 *    delete:
 *      tags:
 *        - comments
 *      description: comments remove
 *      produces:
 *        - application/json
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: 코멘트 삭제
 */
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params
  comments = comments.filter(c => c.id !== id)

  // res.redirect(`/comments/`)
  res.send(comments)
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
