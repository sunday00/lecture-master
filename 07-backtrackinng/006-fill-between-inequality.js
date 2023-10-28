let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, SIGN] = input.split('\n')

// @info: logic start
// @@info: prepare for using

const signs = SIGN.split(' ')

let min = 10_000_000_000
let max = -1

let visited = new Array(10).fill(false)
let selected = []
let answers = []

function dfs() {
    if(selected.length === Number(N) + 1) {
        for(let i=0;i<selected.length-1;i++){
            const left = selected[i]
            const right = selected[i+1]
            if(signs[i] === '<') {
                if(left > right) return
            } else {
                if(left < right) return
            }
        }

        min = Math.min(min, Number(selected.join('')))
        max = Math.max(max, Number(selected.join('')))

        return
    }

    for(let i=0; i<10; i++) {
        if(visited[i]) continue
        selected.push(i)
        visited[i] = true
        dfs()
        selected.pop()
        visited[i] = false
    }
}

dfs()
console.log(String(max))
console.log(String(min).length < String(max).length ? '0'+min : String(min))

