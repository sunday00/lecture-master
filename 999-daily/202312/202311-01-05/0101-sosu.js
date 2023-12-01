let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [n, ...data] = input.split('\n')
// @info: logic start
// @@info: prepare for using

let ans = ''

for(const d of data) {
    if(Number(d) === 1 || Number(d) === 0) {
        ans += ans === '' ? 2 : '\n'+2
        continue
    }

    let curr = Number(d)
    let isSosu = false

    let divider = 2
    while (divider <= Math.sqrt(curr)) {
        if(curr % divider === 0) {
            if(divider % 2 === 0) curr++
            else curr += 2

            divider = 2
        } else divider++
    }

    isSosu = true
    ans += ans === '' ? curr : '\n'+curr
}

console.log(ans)
