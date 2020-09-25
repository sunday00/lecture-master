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

const renderViewWithData = async (ctx: RouterContext, view: string, data: object) => {
    const user = ctx.state.currentUser;
    return await renderFileToString(`${Deno.cwd()}/views/${view}.ejs`, {
        user : user,
        ...data
    });
}

export const home = async (ctx: RouterContext) => {
    ctx.response.body = await renderViewWithData(ctx, 'home', {});
}

export const login = async (ctx: RouterContext) => {
    let msg = null;
    if(ctx.state.flash){
        msg = ctx.state.flash;
    }
    ctx.state.flash = null;
    ctx.response.body = await renderViewWithData(ctx, 'login', { error: msg });
}

export const logined = async (ctx: RouterContext) => {
    const body = ctx.request.body();
    const result = await body.value;

    const user = users.find((u: User) => u.username === result.get('username'));
    
    if ( !user || !compareSync(result.get('password'), user.password.toString()) ){
        ctx.response.body = await renderViewWithData(ctx, 'login', {
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
    ctx.response.body = await renderViewWithData(ctx, 'sign', {});
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

    users.push(user);

    ctx.response.redirect('/login');

}

export const logout = async (ctx: RouterContext) => {
    ctx.cookies.delete('jwt');
    ctx.response.redirect("/");
}

export const protectedView = async (ctx: RouterContext) => {
    ctx.response.body = await renderViewWithData(ctx, 'dashboard', {});
}