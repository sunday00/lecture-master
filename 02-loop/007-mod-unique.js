let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().split('\n')

let s = new Set()
for(let i=0;i<n.length;i++){
  s.add(Number(n[i]) % 42)
}

console.log(s.size)