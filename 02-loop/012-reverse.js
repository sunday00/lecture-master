let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().trim().split('\n')
let l = n[0].split(' ')

for(let i=l[0].length - 1; i>=0; i--){
  if (l[0][i] === l[1][i]) continue;
  if (Number(l[0][i]) > Number(l[1][i])) {
    console.log(Number(l[0].split('').reverse().join('')))
    break
  } else {
    console.log(Number(l[1].split('').reverse().join('')))
    break
  }
}
