import {User} from "../user/user.model.js";
import {Post} from "../post/post.model.js";

class ProfileController {
    async index (req, res, next) {
        const posts = await Post.find({ "author.id": req.user.id })
            .populate('comments')
            .sort({ createdAt: -1 })
            .exec()
            .catch(err => err)

        if (posts instanceof Error) {
            req.flash('error', '게시물을 가져오는데 실패했습니다.');
            return res.redirect('back');
        }

        const user = await User.findById(req.user.id).catch(err => err)

        if (user instanceof Error) {
            req.flash('error', '없는 유저 입니다.');
            return res.redirect('back');
        }

        res.render('profile', { posts, user})
    }

    async edit(req, res, next) {
        res.render('profile/edit', {
            user: req.user
        })
    }

    async update(req, res, next) {
        const user = await User.findByIdAndUpdate(req.user.id, req.body).catch(err => err)

        if (user instanceof Error) {
            req.flash('error', '유저 데이터를 업데이트하는데 에러가 났습니다.');
            return res.redirect('back');
        }

        req.flash('success', '유저 데이터를 업데이트하는데 성공했습니다.');
        res.redirect('/profile');
    }
}

export const profileController = new ProfileController()
