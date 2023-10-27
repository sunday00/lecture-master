let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let DATA = input.split('-')

let sum  = 0
for(let i=0;i<DATA.length;i++){
    let part = DATA[i].split('+')
    let pSum = 0
    for(let y=0;y<part.length;y++){
        pSum += Number(part[y])
    }
    if(i === 0) sum += pSum
    else sum -= pSum
}

console.log(sum)
