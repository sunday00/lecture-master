class PostModel {
    constructor() {
        this.repository = [
            {
                id: 1,
                title: 'aaa',
                description: 'appappap',
                comments: [
                    {
                        id: 1,
                        text: 'hohohoho',
                        likes: 0
                    },
                    {
                        id: 2,
                        text: 'grwegds',
                        likes: 0
                    },
                ]
            },
            {
                id: 2,
                title: 'bbb',
                description: 'bbsdfdsv',
                comments: []
            },
            {
                id: 3,
                title: 'ccc',
                description: 'cccdscsccew',
                comments: [
                    {
                        id: 3,
                        text: 'hjrthrt',
                        likes: 2
                    },
                ]
            },
        ]
    }

    list() {
        return this.repository
    }

    one(id) {
        return this.repository.find(p => p.id === Number(id));
    }

    store(body) {
        body.id = this.repository.length
        this.repository.push(body)

        return body
    }
}

export const postModel = new PostModel()