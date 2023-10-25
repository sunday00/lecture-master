let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().trim().split('\n')

let gwCnt = 0
for(let i=1; i<n.length; i++){
  const word = n[i]

  let used = new Map()
  let curr = ''
  let isGW = false
  for(let y=0; y<word.length; y++){
    const ch = word[y]
    if(curr !== ch) {
      if(used.get(ch)) break
    }

    used.set(ch, true)
    curr = ch

    if(word.length - 1 === y) isGW = true
  }

  if(isGW) {
    gwCnt++
  }
}

console.log(gwCnt)
