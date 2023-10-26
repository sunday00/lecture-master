let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...ARR] = input.split('\n')

let arr = Array.from(new Set(ARR))

arr.sort((a, b) => {
    if(a.length === b.length) {
        return (a > b) ? 1 : -1
    } else {
        return a.length - b.length
    }
})

console.log(arr.join('\n'))

