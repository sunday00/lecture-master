let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [K, ...DATA] = input.split('\n')

let pbs = [0, 1]
while (pbs[pbs.length - 1] < 1e9) {
    pbs.push(pbs[pbs.length-2] + pbs[pbs.length-1])
}

let answers = ''

for(let di=0;di<DATA.length;di++) {
    let T = Number(DATA[di])

    let answer = ''

    let remain = T

    let id = pbs.length-1

    while (remain > 0) {
        const pb = pbs[id]
        if(remain - pb >= 0) {
            remain -= pb
            answer = pb + ' ' + answer
        }
        id--
    }

    answers += answer + '\n'
}

console.log(answers)
