let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()
let [N, ...DATA] =  input.split('\n')

console.log(DATA.sort((a,b) => {
    let [ageA, nameA] = a.split(' ')
    let [ageB, nameB] = b.split(' ')

    if(ageA === ageB) {
        return 1
    } else {
        return Number(ageA) - Number(ageB)
    }
}).join('\n'))
