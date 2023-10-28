let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, P, M] = input.split('\n')

let provinces = P.split(' ').map(Number).sort((a,b) => a-b)

let start = 1
let end = provinces.reduce((a,b) => Math.max(a,b))

let result = 0
while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let total = 0

    for(let p of provinces) {
        total += Math.min(mid, p) // 상한선에 못 미치는 예산은 걍 배정 || 상한선 배정
    }

    if(total <= M) { // 실제 가능액 보다 목표액이 작을 수 있으므로 여기에 작같 + result
        result = mid
        start = mid + 1
    } else {
        end = mid - 1
    }
}

console.log(result)
