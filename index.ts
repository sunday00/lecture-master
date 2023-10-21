import figlet from "figlet";
import * as bun from "bun";
import {BunFile} from "bun";

const server = Bun.serve({
  port:  process.env.PORT,
  fetch(req: Request) {
    const url = new URL(req.url)
    let body:  string | BunFile = figlet.textSync('404')
    let status = 404

    switch (url.pathname) {
      case '/':
        body = figlet.textSync('home')
        status =  200
        break
      case '/err':
        throw new Error('Some Err')
      case '/greet-stream':
        body = bun.file('./greet.txt')
    }

    return new Response(body, { status })
  },
  error(err) {
    return new Response(`<pre>${err.message}</pre>`, {
      headers: {
        'Content-Type': 'text/html'
      }
    })
  }
})

console.log(`server is running on ${server.port}`)
