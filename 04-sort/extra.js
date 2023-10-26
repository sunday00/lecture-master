/**
 * [1,2,3],
 * [2,4,6],
 * [3,6,9],
 * */

/**
 * [ 1, 2, 3, 4],
 * [ 2, 4, 6, 8],
 * [ 3, 6, 9,12],
 * [ 4, 8,12,16],
 * */

/**
 * [ 1, 2, 3, 4, 5, 6, 7, 8]
 * [ 2, 4, 6, 8,10,12,14,16]
 * [ 3, 6, 9,12,15,18,21,24]
 * [ 4, 8,12,16,20,24,28,32]
 * [ 5,10,15,20,25,30,35,40]
 * [ 6,12,18,24,30,36,42,48]
 * [ 7,14,21,28,...]
 * [ 8,16,24,43,...]
 *
 *
 * [1,2,2,3,3,4,4,4,5,5,6,6,6,6,7,7,8,8,8,8,9,10,10,12,12,12,12,14,14,15,15,16,16,16,18,18,20,20,20]
 * 8*8 35th = 18
 * */

let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().trim().split('\n')
let [N, K] = n.map(Number)

const findIdx = (mid) => {
    let idx = 0
    for (let i=1; i<=N; i++) {
        idx += Math.min(N, Math.floor(mid/i))
    }
    return idx
}

const f = (initRight) => {
    let left = 1
    let right = initRight

    while(left <= right) {
        let mid = Math.floor((left + right) /  2)
        let idx = findIdx(mid)

        if(idx >= K) right = mid - 1
        else left = mid + 1
    }

    return left
}

console.log(f(K))



