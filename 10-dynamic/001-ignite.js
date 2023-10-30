let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let N = +input

let data = new Array(N + 1).fill(0)

function fibo(x) {
    // @info: init value when increase direction
    // @@info: so, ignite way, top down decrease direction, last value exit
    if(x === 1 || x === 2) {
        return 1
    }

    // @info: cache for duplicated recursive
    if(data[x] !== 0) return data[x]

    // @info: recursive for small problem divide
    // @@info: ignite statement
    data[x] = BigInt(fibo(x-1)) + BigInt(fibo(x-2))

    // @info: return final
    return data[x]
}

console.log(`${fibo(N)}`)

