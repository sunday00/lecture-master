let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, K] = input.split(' ').map(Number)
// @info: logic start
// @@info: prepare for using

// @@info: que
class Queue {
    constructor() {
        this.items = {}
        this.headIndex = 0
        this.tailIndex = 0
    }

    en(item) {
        this.items[this.tailIndex] = item
        this.tailIndex++
    }

    de() {
        const item = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        return item
    }

    peek() {
        return this.items[this.headIndex]
    }

    length() {
        return this.tailIndex - this.headIndex
    }
}

const MAX = 100001
let visited =  new Array(MAX).fill(0)

function bfs() {
    let q = new Queue()
    q.en(N)

    while (q.length() !== 0) {
        let cur = q.de()
        if(cur === K) {
            return visited[cur]
        }

        for(let nx of [cur-1,cur+1,cur*2]){
            if(nx<0||nx>MAX) continue

            if(visited[nx] === 0) {
                visited[nx] = visited[cur] + 1
                q.en(nx)
            }
        }
    }
}

console.log(bfs())
