let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [A, B] = input.split(' ').map(Number)

let remain = B
let cnt = 0
while(remain > 0 && remain >= A) {
    if(remain === A) {
        break
    }

    else if(remain % 2 === 0) {
        remain /= 2
        cnt++
    }

    else if(String(remain).endsWith('1')) {
        remain = Math.floor(remain / 10)
        cnt++
    }

    else {
        break
    }
}

if(remain === A) console.log(cnt + 1)
else console.log(-1)
