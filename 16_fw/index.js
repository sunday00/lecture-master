const express = require('express')
const app = express()
const port = 8088

// app.use((req, res) => {
//   console.log("request is coming...")

//   // res.send("welcome")
//   res.send({ color: "tomato" })
// })

app.get('/', (req, res) => {
  console.log("request comes to / ")
  res.send("hello... ")
})

app.get('/animal/:animal', (req, res) => {
  console.log("request comes to /animal")
  const { id } = req.query
  if( !id ) return res.send('no result')
  res.send({ 
    animal: req.params.animal,
    id: parseInt(id)
  })
  // http://localhost:{port}/animal/cat?id=3
})

app.get('*', (req, res) => {
  console.log("err 404 not found")
  res.send("404")
})

app.listen(port, () => {
  console.log(`Now running on port ${port}`)
})
