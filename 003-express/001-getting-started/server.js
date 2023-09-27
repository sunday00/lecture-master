import express from 'express'

const PORT = 8080
const HOST = '0.0.0.0'

const Users = [
  {id: 1, name: 'Jack'},
  {id: 2, name: 'Jane'},
]

const app = express()
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/users', (req, res) => {
  res.json(Users)
})

app.get('/users/:id', (req, res) => {
  const user = Users.find((u) => u.id === Number(req.params.id))
  if(user){
    res.json(user)
  } else {
    res.sendStatus(404)
  }
})

app.listen(PORT, HOST)

console.log(`Running on http://${HOST}:${PORT}`)