let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, ...DATA] = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)

let [n, m] = INFO.split(' ').map(Number)

// @info: logic start
// @@info: prepare for using

let minimum = 32
for(let cur of ['W', 'B']) {
    let now = cur
    let fix = 0

    for(let i=0;i<=n-8;i++) {
        for(let j=0;j<=m-8;j++) {
            for(let a=i; a<i+8; a++) {
                for(let b=j; b<j+8; b++) {
                    if (DATA[a][b] !== now) {
                        fix++
                    }

                    now = now === 'W' ? 'B' : 'W'
                }
                now = now === 'W' ? 'B' : 'W'
            }

            minimum = Math.min(minimum, fix)
            fix = 0
            now = cur
        }
    }
}

console.log(minimum)

