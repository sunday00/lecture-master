import {RouterContext} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import {renderFileToString} from "https://deno.land/x/dejs@0.8.0/mod.ts";
import {hashSync} from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import {users} from "./users.ts";

export const home = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/home.ejs`, {});
}

export const login = async (ctx: RouterContext) => {
    ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {});
}

export const logined = async (ctx: RouterContext) => {
    const body = ctx.request.body();
    const result = await body.value;

    const user = users.find(u => u.username === result.get('username'));
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