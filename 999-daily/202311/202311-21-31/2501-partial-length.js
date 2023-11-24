let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let S = input
// @info: logic start
// @@info: prepare for using

let t = new Map()

let start = 0
let end = 1

let cnt = 0

for(let z=0;z<S.length;z++){
    start = z
    for(let y=start+1;y<=S.length;y++){
        end = y

        const w = S.slice(start, end)

        if(!t.get(w)) {
            t.set(w, true)
            cnt++
        }
    }
}

console.log(cnt)
