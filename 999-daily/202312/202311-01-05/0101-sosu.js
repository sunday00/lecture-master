let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [n, ...data] = input.split('\n')
// @info: logic start
// @@info: prepare for using

for(const d of data) {
    let curr = Number(d)
    let isSosu = false

    let divider = 2
    let sqrt = Math.sqrt(curr)
    while (divider <= sqrt) {
        if(curr % divider === 0) {
            if(divider % 2 === 0) curr++
            else curr += 2

            divider = 2
        } else divider++
    }

    isSosu = true
    console.log(curr)
}
