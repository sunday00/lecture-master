import { model } from './post.model.js'

class PostController {
  list(req, res){
    res.json(model)
  }

  getPostById(req, res) {
    const post = model.find((p) => p.id === Number(req.params.id))
    if(post){
      res.json(post)
    } else {
      res.sendStatus(404)
    }
  }

  createPost(req, res) {
    model.push({
      id: model[model.length - 1].id + 1,
      title: req.body.title,
    })

    res.sendStatus(201)
  }
}

export default new PostController()
