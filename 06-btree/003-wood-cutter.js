let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let [info, TREES] = input.split('\n')
let [C, T] = info.split(' ')

let trees = TREES.split(' ').map(Number)

let result = 0
let start = 0
let end = trees.reduce((a,b)=>Math.max(a,b))
while (start<=end){
    let mid = Math.floor((start + end) /  2)
    let total = 0

    for(let h of trees) {
        total += Math.max(h - mid, 0)
    }

    if(total < Number(T)) {
        end = mid - 1
    }  else { // 목표 길이는 꼭 정확해야하고, 그러다보면 더 잘르게 되고, 더 잘리는 양을 최소화하는 문제이므로 여기에 result
        result = mid
        start = mid + 1
    }
}

console.log(result)

