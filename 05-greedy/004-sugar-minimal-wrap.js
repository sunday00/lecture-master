let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let cnt = 0
let remains = Number(input)

while (remains % 5 !== 0 && remains > 0) {
    remains -= 3
    cnt += 1
}

let subCnt = Math.floor(remains / 5)
cnt += subCnt
remains -= subCnt * 5

if(remains > 0) console.log(-1)
else console.log(cnt)
