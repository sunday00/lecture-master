let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let N = Number(input)

// @info: logic start
// @@info: prepare for using

let arr = []
for (let i=1;i<=N;i++) arr.push(i) // * 사용할 숫자 모음

let visited = new Array(N).fill(false) // * node 체크 시 썼다 지웠다 할 메모리
let selected = [] // * 선택된 node

let answer = ""

function dfs (arr, depth) {
    if(depth === N) {
        let result = []
        for(let i of selected) result.push(arr[i])
        for(let x of result) answer += x + " "
        answer += "\n"
        return
    }
    for(let i=0; i < arr.length; i++) {
        if (visited[i]) continue
        selected.push(i)
        visited[i] = true
        dfs(arr, depth + 1)
        selected.pop()
        visited[i] = false
    }
}

dfs(arr, 0)
console.log(answer)
