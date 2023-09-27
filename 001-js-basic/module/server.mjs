import {createServer} from 'http'

const port = 3100

const server = createServer((req, res) => {
    res.statuscode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(`<h1>Hello world</h1>`)
})

server.listen(port, () => {
    console.log(`Server is now running on ${port}`)
})