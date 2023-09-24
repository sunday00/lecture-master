import {configDotenv} from "dotenv";
import path from "path";

configDotenv({ path: path.resolve('.env') })

export const productEntity  = (sequelize, Sequelize) => {
    return sequelize.define('product', {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        stock: {
            type: Sequelize.INTEGER
        },
    }, { schema: process.env.DB_SCHM })
}
