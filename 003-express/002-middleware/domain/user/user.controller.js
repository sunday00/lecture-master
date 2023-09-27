import { model } from './user.model.js'

class UserController {
  list(req, res){
    res.json(model)
  }

  getUserById(req, res) {
    const user = model.find((u) => u.id === Number(req.params.id))
    if(user){
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  }

  createUser(req, res) {
    model.push({
      id: model[model.length - 1].id + 1,
      name: req.body.name,
    })

    res.sendStatus(201)
  }
}

export default new UserController()
