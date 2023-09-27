class RootValueManager {
    constructor() {
        this.rootValue = {}
    }
}

const schemaValueManager = new RootValueManager()

schemaValueManager.rootValue['posts'] = [
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

schemaValueManager.rootValue['comments'] = [
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
    {
        id: 3,
        text: 'hjrthrt',
        likes: 2
    },
]

export { schemaValueManager }
