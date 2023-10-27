let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...DATA] = input.split('\n')

let results = []

for(let t of DATA) {
    let subResult = undefined

    let backward = t.split('').reverse().join('')

    if(t === backward) subResult = 0
    else {
        for (let i = 0; i < Math.floor(t.length/2); i++) {
            if(t[i] !== t[t.length - 1 - i]) {
                const checkForwardBlank = t.slice(0, i) + t.slice(i+1, t.length)
                if (checkForwardBlank === checkForwardBlank.split('').reverse().join('')){
                    subResult = 1
                }

                const checkBackwardBlank = t.slice(0, t.length - 1 - i) + t.slice(t.length - i, t.length)
                if (checkBackwardBlank === checkBackwardBlank.split('').reverse().join('')){
                    subResult = 1
                }
                break
            }
        }

        if(!subResult) subResult = 2
    }

    results.push(subResult)
}

console.log(results.join('\n'))
