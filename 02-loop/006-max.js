let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().split('\n')
// let n = fs.readFileSync('./example.txt').toString().split('\n')

let candidate = Number(n[0])
let sort = 0
for(let i=0;i<n.length;i++) {
  sort = candidate < n[i] ? i : sort
  candidate = candidate < n[i] ? n[i] : Number(candidate)
}

console.log(`${candidate}\n${sort+1}`)