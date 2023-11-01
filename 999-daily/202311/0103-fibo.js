let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...DATA] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let memo = new Array(Number(40) + 1).fill(null)
memo[0] = [1,0,0]
memo[1] = [0,1,1]
for(let i=2;i<=40;i++) {
    memo[i] = [0, 0, 0]
}

function getFibo(t) {
    if(t === 0) {
        return memo[0]
    }
    else if(t === 1) {
        return memo[1]
    }
    else if (memo[t][2] !== 0){
        return memo[t]
    }
    else {
        let l = getFibo(t - 1)
        let r = getFibo(t - 2)
        memo[t][0] = l[0] + r[0]
        memo[t][1] = l[1] + r[1]
        memo[t][2] = l[2] + r[2]
        return memo[t]
    }
}

for(let data of DATA) {
    let n = +data

    let [z, o, R] = getFibo(n)

    console.log(`${z} ${o}`)
}
