import {configDotenv} from "dotenv";
import path from "path";
import {Sequelize} from "sequelize";
import fs from "fs";

configDotenv({ path: path.resolve('.env') })

const penv = process.env
const domainDir = path.resolve('./src/domain')

export const dbConfig = {
    "username": penv.DB_USER,
    "password": penv.DB_PASS,
    "database": penv.DB_NAME,
    "host": penv.DB_HOST,
    "port": penv.DB_PORT,
    "schema": penv.DB_SCHM,
    "dialect": "postgres"
}

// const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)
const sequelize = new Sequelize(`postgres://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`, dbConfig)
const db = {}

const domains = fs.readdirSync(domainDir)

for(let domain of domains){
    const files = fs.readdirSync(path.join(domainDir, domain, '/model'))
    for(let file of files) {
        if((new RegExp(/.+\.entity\.js/).test(file))){
            const entityObj = await import(path.join(domainDir, domain, '/model/', file))
            const entity = entityObj[`${domain}Entity`]

            const model = entity(sequelize, Sequelize)

            db[model.name] = model
        }
    }
}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.sequelize.sync({ force: process.env.APP_ENV !== 'prod' })
//     .then(() => {console.log('success db init')})
//     .catch(err => {console.error(err)})

export { db }


