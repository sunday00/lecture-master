let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().split('\n')
// let n = fs.readFileSync('./example.txt').toString().split('\n')

let r = ''
for (let i= 1; i<n.length-1; i++) {
  let [a, b] = n[i].split(' ').map(Number)
  r += a + b + '\n'
}

console.log(r)