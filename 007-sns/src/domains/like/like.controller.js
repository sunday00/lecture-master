import {Post} from "../post/post.model.js";

class LikeController {
    async update(req, res, next) {
        const post = await Post.findById(req.params.postId)
            .catch(err => err)

        if (post instanceof Error) {
            req.flash('error', '포스트를 찾지 못했습니다.');
            return res.redirect('back');
        }

        let result;

        // 이미 누른 좋아요
        if (post.likes.find(like => like === req.user._id.toString())) {
            const updatedLikes = post.likes.filter(like => like !== req.user._id.toString());

            result = Post.findByIdAndUpdate(post._id, {
                likes: updatedLikes
            }).catch(err => err)
        }
        // 처음 누른 좋아요
        else {
            result = Post.findByIdAndUpdate(post._id, {
                likes: post.likes.concat([req.user._id])
            }).catch(err => err)
        }

        if (result instanceof Error) {
            req.flash('error', '좋아요를 업데이트하는데 에러가 발생했습니다.');
            return res.redirect('back');
        }

        req.flash('success', '좋아요를 업데이트 했습니다.');
        res.redirect('back');
    }
}

export const likeController = new LikeController()