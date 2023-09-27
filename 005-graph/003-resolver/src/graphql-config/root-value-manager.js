import {postModel} from "../domain/post/post.model.js";
import {commentModel} from "../domain/comment/comment.model.js";

class RootValueManager {
    constructor() {
        this.rootValue = {}
    }

    add(k, v) {
        this.rootValue[k] = v
    }
}

const schemaValueManager = new RootValueManager()

schemaValueManager.add('posts', postModel)
schemaValueManager.add('comments', commentModel)

export { schemaValueManager }
