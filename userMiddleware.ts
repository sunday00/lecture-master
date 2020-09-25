import {Context} from "https://deno.land/x/oak@v6.2.0/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import { User, users } from "./users.ts";

const userMiddleware = async (ctx: Context, next: Function) => {
    const jwt = ctx.cookies.get('jwt');

    if(jwt){
        const key = Deno.env.get('JWT_KEY') ?? "";
        const data = await validateJwt({ jwt, key, algorithm: "HS256" });

        if( data.isValid ){
            
            const payload: PayloadObject = data.payload as PayloadObject;
            const user = users.find((u: User) => u.username === payload.iss);
            ctx.state.currentUser = user;
            console.log(user);
        } else {
            ctx.cookies.delete('jwt');
        }
    }

    await next();
}

export default userMiddleware;

interface PayloadObject
{
    iss: String,
    exp: Number,
}
