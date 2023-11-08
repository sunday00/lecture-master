let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [S, N] = input.split('\n')
// let [N, ...str] = input.split('\n')
let str = input.split('')

// @info: logic start
// @@info: prepare for using

function sToN (s) {
    let c = s.charCodeAt()
    let small = Math.floor((c -62) / 3) + 1
    if(s === 'S' || s === 'V' || s === 'Y' || s === 'Z') small--

    return small
}

let ans =  0
for(let i=0;i<str.length;i++){
    let no = sToN(str[i])
    ans += no+1
}

console.log(ans)
