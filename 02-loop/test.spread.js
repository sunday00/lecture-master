let now = Date.now()

let a = Array(600000).fill(Math.random() * 1000)
console.log(Math.max(...a))

console.log(Date.now() - now)
