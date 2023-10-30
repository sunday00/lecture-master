let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, T] = input.split(' ').map(Number)
// @info: logic start
// @@info: prepare for using

if(N === T) {
    console.log(0)
    process.exit(0)
}

const Queue = class Queue {
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

let visited = new Set([N])

function calc(a, o) {
    switch (o){
        case '*': return a * a
        case '+': return a + a
        case '-': return a - a
        case '/': return 1
    }
}

let found = false

function bfs () {
    let q = new Queue()
    q.en([N, ''])

    while (q.length() !== 0) {
        let [v, O] = q.de()
        if(v > 1e9) continue

        if(v === T) {
            console.log(O)
            found = true
            break
        }

        for(let o of ['*', '+', '-', '/']) {
            if(o === '/' && v === 0) continue
            let nx = calc(v, o)
            if(!visited.has(nx)) {
                q.en([nx, O + o])
                visited.add(nx)
            }
        }
    }
}

bfs()

if(!found) console.log(-1)
