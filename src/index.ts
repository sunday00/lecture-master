import {Elysia, t} from "elysia";
import swagger from "@elysiajs/swagger";
import {get} from "http";
import {signDto} from "./struct/sign.dto";

const app = new Elysia()

type AppState = {
  version: number,
  apple: string,
}

namespace Decorator {
  export type getDate = () => number
}

app.state({
    version: 1,
    apple: 'red',
  })
  .decorate('getDate', () => Date.now())

//Middleware
app
  .use(swagger({
  documentation: {
    info: {
      title: 'Bun X Elysia Tutorial',
      version: '0.1.0'
    },
    tags: [
      {name: 'Tutorial', description: 'bun basic tutorials'}
    ]
  },
  path: 'docs',
}))

//Routes
app.group('/tuto', (app) =>
  app
    .state({version: 1})
    .decorate('getDate', () => Date.now())
    .get("/", () => "Hello Elysia")
    .get('/post/:id', ({params: {id}}) =>  ({id}), {
        params: t.Object({
          id: t.Numeric()
        })
      })
    .post('/post', (ctx) => {
        ctx.set.status = 201
        return ctx.body
      }, {
        detail: {
        tags: ['Tutorial'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  title: {
                    type: 'string',
                    description: 'title',
                    // default: ''
                  }
                }
              }
            }
          }
        }
      }
      })
    )
  .get('/using-decorate', ({store, getDate}) => {
      return {
        version: store.version,
        date: getDate()
      }
    })
  .post('/sign', ({body}) => {
    return body
  }, {body: signDto, response: signDto})
  .all('/*', (({set})  => {
      set.status = 404
    }))

//RUN
app.listen(Number(process.env.PORT))

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
