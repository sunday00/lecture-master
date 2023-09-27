import {AppDataSource} from "../../config/db/data-source";
import {UserEntity} from "./user.entity";
import {Request, Response} from "express";

class UserController {
    private readonly repository
    constructor() {
        this.repository = AppDataSource.getRepository(UserEntity)
    }
    async list(req: Request, res: Response) {
        res.json(await this.repository.find())
    }

    async one(req: Request, res: Response){
        res.json(await this.repository.findOneBy({ id: parseInt(req.params.id) }))
    }

    async store(req: Request, res: Response){
        const user = this.repository.create(req.body)
        res.json(await this.repository.save(user))
    }

    async update(req: Request, res: Response){
        const user = await this.repository.findOneBy({ id: parseInt(req.params.id) })

        if(user){
            this.repository.merge(user, req.body)
            res.json(await this.repository.save(user))
        }
    }

    async delete(req: Request, res: Response){
        const user = await this.repository.findOneBy({ id: parseInt(req.params.id) })

        if(user){
            res.json(await this.repository.delete(user))
        }
    }
}

export const userController = new UserController()