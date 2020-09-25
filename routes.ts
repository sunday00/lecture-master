import {RouterContext} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import {renderFileToString} from "https://deno.land/x/dejs@0.8.0/mod.ts";
import {hashSync, compareSync} from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import { makeJwt, setExpiration, Jose, Payload } from "https://deno.land/x/djwt@v1.6/create.ts";
import {users, User} from "./users.ts";

const key = Deno.env.get('JWT_KEY') ?? "";
const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export const home = async (ctx: RouterContext) => {
    const user = ctx.state.currentUser;
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {
        user : user
    });
}

export const login = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, { error: "" });
}

export const logined = async (ctx: RouterContext) => {
    const body = ctx.request.body();
    const result = await body.value;

    const user = users.find((u: User) => u.username === result.get('username'));
    
    if ( !user || !compareSync(result.get('password'), user.password.toString()) ){
        ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {
            error: 'Failed to login. Check your username and password'
        });
    } else {
        console.log( `${user.name} logged in.` );
        const payload: Payload = {
            iss: user.username.toString(),
            exp: setExpiration(60 * 60),
        };
        const jwt = await makeJwt({key, header, payload});
        ctx.cookies.set('jwt', jwt);
        ctx.response.redirect('/');
    }
}

export const sign = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/sign.ejs`, {});
}

export const signed = async (ctx: RouterContext) => {
    // const body = await ctx.request.body().value;
    // console.log(body);

    const body = ctx.request.body();
    const result = await body.value;

    const hashedPassword = hashSync(result.get('password'));

    const user = {
        name: result.get('name'),
        username: result.get('username'),
        password: hashedPassword,
    }

    console.log(user);

    users.push(user);

    ctx.response.redirect('/login');

}

export const logout = async (ctx: RouterContext) => {
    
}