let now = Date.now()

let a = Array(600000).fill(Math.random() * 1000)
console.log(a.reduce((acc, cur) => Math.max(acc, cur)))

console.log(Date.now() - now)
