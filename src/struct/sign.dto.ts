import {t} from "elysia";

export const signDto = t.Object({
  username: t.String(),
  password: t.String(),
})
