let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...ARR] = input.split('\n')
ARR.sort((a, b) => {
    let parseA = a.split(' ').map(Number)
    let parseB = b.split(' ').map(Number)

    if(parseA[1] === parseB[1]) {
        return parseA[0] - parseB[0]
    } else {
        return parseA[1] - parseB[1]
    }
})

console.log(ARR.join('\n'))

