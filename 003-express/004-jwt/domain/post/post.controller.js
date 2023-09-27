import {postModel} from "./post.model.js";

class PostController {
    getPosts(req, res) {
        res.json(postModel)
    }

    getPostByUserName(req, res) {
        const post = postModel.find(p => p.username === req.user.name)
        return res.json(post)
    }
}

export const postController = new PostController()