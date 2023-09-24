import {Post} from "../domains/post/post.model.js";
import {Comment} from "../domains/comment/comment.model.js";
import {raw} from "express";

export const checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/login');
}

export const checkGuest = (req, res, next)  => {
    if (req.isAuthenticated()) {
        return res.redirect('/post');
    }
    next();
}

export const checkPostOwnerShip = async (req, res, next) => {
    if (req.isAuthenticated()) {
        // id에 맞는 포스트가 있는 포스트인지
        const post = await Post.findById(req.params.id)
            .then(post => {
                // 포스트가 있는데 나의 포스트인지 확인
                if (post.author.id.equals(req.user._id)) {
                    req.post = post;
                    next();
                } else {
                    req.flash('error', 'Not yours');
                    res.redirect('back');
                }
            })
            .catch(err => {
                req.flash('error', 'not found');
                res.redirect('back');
            })



    } else {
        req.flash('error', 'Session expired');
        res.redirect('/auth/login');
    }
}

export const checkCommentOwnerShip = async (req, res, next) => {
    if (req.isAuthenticated()) {
        // id에 맞는 포스트가 있는 포스트인지
        const comment = await Comment.findById(req.params.id)
            .then(comment => {
                // 포스트가 있는데 나의 포스트인지 확인
                if (comment.author.id.equals(req.user._id)) {
                    req.comment = comment;
                    next();
                } else {
                    req.flash('error', 'Not yours');
                    res.redirect('back');
                }
            })
            .catch(err => {
                req.flash('error', 'not found');
                res.redirect('back');
            })
    } else {
        req.flash('error', 'Session expired');
        res.redirect('/auth/login');
    }
}