let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, K] = input.split(' ').map(Number)

let minimal = Number(K) * (Number(K)  + 1) / 2

if(minimal > N) {
    console.log(-1)
} else {
    let remain = (N - minimal) % K

    if(remain > 0) {
        console.log(K)
    } else {
        console.log(K - 1)
    }
}


