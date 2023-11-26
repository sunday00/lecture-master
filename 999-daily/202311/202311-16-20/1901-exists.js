let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [n, ...data] = input.split('\n')
// @info: logic start
// @@info: prepare for using

let exists = new Map()
for(let man of data) {
    let [name, act] = man.split(' ')
    if(act === 'enter') exists.set(name, true)
    else exists.set(name, false)
}

let a = Array.from(exists)
let still = []
for(let i =0; i< a.length; i++){
    if(a[i][1]) still.push(a[i][0])
}

console.log(still.sort().reverse().join('\n'))

