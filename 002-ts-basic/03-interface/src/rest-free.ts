interface RestFree {
    name: string
    age: number
    [rest: string]: unknown
}

const lv1: RestFree = {
    name: '',
    age: 12,
    skill: 'java'
}