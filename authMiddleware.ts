import {Context} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import { User, users } from "./users.ts";

const authMiddleware = async (ctx: Context, next: Function) => {
   
    if( !ctx.state.currentUser ){
        ctx.response.redirect('/login');

        ctx.state.flash = "You need to login";
    }

    await next();
}

export default authMiddleware;
