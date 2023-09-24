import {Post} from "../post/post.model.js";
import {Comment} from "./comment.model.js";

class CommentController {
    async store(req, res, next) {
        const post = await Post.findById(req.params.postId).exec()
            .catch(err => err)

        if (post instanceof Error) {
            req.flash('error', '댓글을 생성 중 포스트를 찾지 못했거나 에러가 발생했습니다.');
            return res.redirect('back');
        }

        const comment = await Comment.create(req.body)
            .catch(err => err)

        if (comment instanceof Error) {
            req.flash('error', '댓글을 생성 중 에러가 발생했습니다.');
            return res.redirect('back');
        }

        // 생성한 댓글에 작성자 정보 넣어주기
        comment.author.id = req.user._id;
        comment.author.username = req.user.username;
        comment.save();

        // 포스트에 댓글 데이터 넣어주기
        post.comments.push(comment);
        await post.save();
        req.flash('success', '댓글이 잘 생성되었습니다.');
        res.redirect('back');
    }

    async edit(req, res, next) {
        const post = await Post.findById(req.params.postId).exec()
            .catch(err => err)

        if (post instanceof Error) {
            req.flash('error', '댓글에 해당하는 게시글이 없거나 에러가 발생했습니다.');
            return res.redirect('back');
        }

        res.render('comments/edit', {
            post: post,
            comment: req.comment,
        })
    }

    async update(req, res, next) {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body)
            .catch(err => err)

        if (comment instanceof Error) {
            req.flash('error', '댓글을 수정하는데 에러가 났습니다.');
            return res.redirect('back');
        }

        req.flash('success', '댓글을 수정하는데 성공했습니다.');
        res.redirect('/post');
    }

    async delete(req, res, next) {
        await req.comment.deleteOne()

        req.flash('success', 'deleted completed');
        res.redirect('/post');
    }
}

export const commentController = new CommentController()
