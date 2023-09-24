import {postModel} from "../post/post.model.js";
import { resolver as postResolver} from "../post/post.resolver.js";

class CommentModel {
    constructor() {
        this.repository = [
            {
                id: 1,
                text: 'hohohoho',
                likes: 0
            },
            {
                id: 2,
                text: 'grwegds',
                likes: 5
            },
            {
                id: 3,
                text: 'hjrthrt',
                likes: 2
            },
            {
                id: 4,
                text: 'hjrthrt',
                likes: 7
            },
        ]
    }

    list(options) {
        let list =  this.repository

        if(options.likes) {
            list = list.filter((c) => {
                const min = options.likes.gt ?? 0
                const max = options.likes.lt ?? Number.MAX_SAFE_INTEGER

                return c.likes >= min && c.likes <= max
            })
        }

        return list
    }

    async one(id) {
        if(!id) id = this.repository[this.repository.length - 1].id
        return this.repository.find(c => c.id === Number(id))
    }

    store({postId, text}) {
        const postIdxFound = postModel.repository.findIndex(p => p.id === Number(postId))

        const newComment = {
            id: postModel.repository[postIdxFound].comments.length + 1,
            text: text,
            likes: 0,
        }

        postModel.repository[postIdxFound].comments.push(newComment)

        console.dir(postModel.repository[1])

        return {
            comment: newComment,
            q: {
                posts: postResolver.Query
            }
        }
    }
}

export const commentModel = new CommentModel()
