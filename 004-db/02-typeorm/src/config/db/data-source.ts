import "reflect-metadata"
import { DataSource } from "typeorm"
import { configDotenv } from "dotenv"
import path from "path";

configDotenv({ path: path.resolve('.env') })
const penv = process.env

export const AppDataSource = new DataSource({
    type: "postgres",
    host: penv.DB_HOST ?? 'localhost',
    port: parseInt(penv.DB_PORT!) ?? 5432,
    username: penv.DB_USER,
    password: penv.DB_PASS,
    database: penv.DB_NAME,
    schema: penv.DB_SCHM,
    synchronize: penv.APP_ENV !== 'production',
    logging: false,
    entities: [path.join(path.resolve('src'), '/domain/**/*.entity.ts')],
    migrations: [],
    subscribers: [],
})
