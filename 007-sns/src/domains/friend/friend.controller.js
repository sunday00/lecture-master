import {User} from "../user/user.model.js";

class FriendController {
    async index(req, res, next) {
        const users = await User.find({}).catch(err => err)

        if (users instanceof Error) {
            req.flash('error', '유저를 가져오는데 에러가 발생했습니다.');
            return res.redirect('/posts');
        }

        res.render('friends', { users })
    }

    async add(req, res, next) {
        const target = await User.findById(req.params.id).catch(err => err)

        if (target instanceof Error) {
            req.flash("error", "유저를 찾지 못했습니다.");
            return res.redirect("/friends");
        }

        const result = await User.findByIdAndUpdate(target._id, {
            friendsRequests: target.friendsRequests.concat([req.user._id])
        })

        if (result instanceof Error) {
            req.flash("error", "friend request sending fail");
            return res.redirect("back");
        }

        req.flash("success", "friend request sending success");
        res.redirect("back");
    }

    async cancel(req, res, next) {
        await this.removeFriendRequest(req.params.id, req.user.id, req, res)
    }

    async accept(req, res, next) {
        const target = await User.findById(req.params.id).catch(err => err)

        if (target instanceof Error) {
            req.flash('error', '유저를 찾지 못했습니다.');
            return res.redirect('back');
        }

        const result = await User.findByIdAndUpdate(
            target._id, {
                friends: target.friends.concat([req.user._id])
            }
        ).catch(err => err)

        if(result instanceof Error) {
            req.flash('error', '친구 추가하는데 실패했습니다.');
            return res.redirect('back');
        }

        const result2 = await User.findByIdAndUpdate(req.user._id, {
                friends: req.user.friends.concat([target._id]),
                friendsRequests: req.user.friendsRequests.filter(friendId =>
                    friendId !== target._id.toString())
            }).catch(err => err)

        if(result2 instanceof Error) {
            req.flash('error', '친구 추가하는데 실패했습니다.');
            return res.redirect('back');
        }

        req.flash('success', '친구 추가를 성공했습니다.');
        res.redirect('back');    }

    async reject(req, res, next) {
        await this.removeFriendRequest(req.user.id, req.params.id, req, res)
    }

    async removeFriendRequest(from, to, req, res) {
        const target = await User.findById(from).catch(err => err)

        if (target instanceof Error) {
            req.flash("error", '유저를 찾지 못했습니다.');
            return res.redirect('back');
        }

        const filteredFriendsRequests = target.friendsRequests.filter(friendId => friendId !== to);

        const result = await User.findByIdAndUpdate(target._id, {
            friendsRequests: filteredFriendsRequests
        }).catch(err => err)

        if (result instanceof Error) {
            req.flash('error', '친구 요청 취소를 하는데 에러가 났습니다.');
            return res.redirect('back');
        }

        req.flash('success', '친구 요청 취소를 성공했습니다.');
        res.redirect('back');
    }

    async remove(req, res, next) {
        const target = await User.findById(req.params.id).catch(err => err)

        if (target instanceof Error) {
            req.flash('error', '유저를 찾는데 실패했습니다.');
            return res.redirect('back');
        }

        const result = await User.findByIdAndUpdate(
            target._id, {
                friends: target.friends.filter(friendId =>
                    friendId !== req.user._id.toString())
            }).catch(err => err)

        if (result instanceof Error) {
            req.flash('error', '친구 삭제하는데 실패했습니다.');
            return res.redirect('back');
        }

        const result2 = await User.findByIdAndUpdate(
            req.user._id, {
                friends: req.user.friends.filter(friendId =>
                    friendId !== req.params.id.toString())
            }).catch(err => err)

        if (result2 instanceof Error) {
            req.flash('error', '친구 삭제하는데 실패했습니다.');
            return res.redirect('back');
        }

        req.flash('success', '친구 삭제하는데 성공했습니다.');
        res.redirect('back');
    }
}

export const friendController = new FriendController()