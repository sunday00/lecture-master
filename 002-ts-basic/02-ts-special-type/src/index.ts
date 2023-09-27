const a: unknown = 1

const b = a as number + 2

console.log(b)

let c: never

let d: string|number

d=1

console.log(d)

interface User {
    name: string
    age: number
}

type Valid = {
    isValid: boolean
}

let u: User&Valid = {
    name: '',
    age: 3,
    isValid: false
}

console.log(u)