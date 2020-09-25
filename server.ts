import "https://deno.land/x/dotenv@v0.5.0/mod.ts";
import {Application, Router} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import {home, login, logined, sign, signed, logout} from "./routes.ts";
import userMiddleware from "./userMiddleware.ts";

const app = new Application();
const router = new Router();

const port = 8008;

app.use(userMiddleware);

router.get('/', home)
    .get('/login', login)
    .get('/sign', sign)
    .get('/protected', home)
    .post('/login', logined)
    .post('/sign', signed)
    .post('/logout', logout);

app.use(router.routes());
app.use(router.allowedMethods());

//DEBUG MODE
app.addEventListener('error', err => {
    console.log(err.error);
})

app.listen({port:port});
console.log(`server started on ${port}`);