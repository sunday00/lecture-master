let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let N = Number(input)

// @info: logic start
// @@info: prepare for using
let splits = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

let cnt = 0
while(input !== '') {
    let isKroatian = false
    for(let i=0;i<splits.length;i++){
        if(input.startsWith(splits[i])) {
            input = input.replace(splits[i], '')
            isKroatian = true
            break
        }
    }
    if (!isKroatian) input = input.replace(input[0], '')
    cnt++
}

console.log(cnt)
