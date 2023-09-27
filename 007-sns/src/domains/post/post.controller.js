import {Post} from "./post.model.js";
import {Comment} from "../comment/comment.model.js";

class PostController {
    async index(req, res) {
        const posts = await Post.find()
            .populate('comments')
            .sort({ createdAt: -1 })
            .exec()
            .catch(err => console.error(err))

        res.render('posts/index', {
            posts,
        })
    }

    async store(req, res, next) {
        let name = req.body.name
        let description = req.body.description
        let image = req.file ? req.file.filename : ''

        const post = await Post.create({
            name,
            image,
            description,
            author: {
                id: req.user._id,
                username: req.user.username
            }
        }).catch(err => {
            return err
        })

        if(post instanceof Error) {
            req.flash('error', `posted failed: ${post}`)
            return res.redirect('back')
        }

        req.flash('success', 'posted complete')
        res.redirect('back')
    }

    edit(req, res, next) {
        res.render('posts/edit', {
            post: req.post
        })
    }

    async update(req, res, next) {
        const post = await req.post.updateOne(req.body)
            .catch(err => {
                return err
            })

        if(post instanceof Error) {
            req.flash('error', `posted failed: ${post}`)
            return res.redirect('back')
        }

        req.flash('success', 'Update completed');
        res.redirect('/post');
    }

    async delete(req, res, next) {
        await req.post.deleteOne()
            .then(res => {
                // file destroy
            })

        req.flash('success', 'deleted completed');
        res.redirect('/post');
    }
}

export const postController = new PostController()