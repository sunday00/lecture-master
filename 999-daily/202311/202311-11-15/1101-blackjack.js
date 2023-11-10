let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [info, data] = input.split('\n')
let [n, m] = info.split(' ').map(Number)
// @info: logic start
// @@info: prepare for using

data = data.split(' ').map(Number).sort((a,b) => a-b)

let ans = 0

for(let i=0; i<data.length; i++) {
    for(let j=i+1; j<data.length; j++) {
        for(let k=j+1; k<data.length; k++) {
            let sum = data[i] + data[j] + data[k]
            if(sum > m) break

            ans = Math.max(sum, ans)
        }
    }
}

console.log(ans)
