let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [cnt, ...lines] = input.split('\n').map(Number)

console.log(lines.sort((a,b) => a - b).join('\n'))

//TIP:
// sort 못쓰게 하면 병합정렬 참고
