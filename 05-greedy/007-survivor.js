let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [T, ...CASES] = input.split('\n')

let OK = []

let caseCnt = 0
let curData = []
for(let i=0; i<CASES.length; i++){
    if(!CASES[i].includes(' ')) {
        caseCnt = Number(CASES[i])
        curData = CASES.slice(i, i+caseCnt+1)
        i+=caseCnt
    }

    let [C, ...data] = curData
    data = data.sort((a,b) => a.split(' ')[0]-b.split(' ')[0])
    let ok = 0

    let cutLine = C
    for(let y=0;y<data.length;y++){
        if(Number(data[y].split(' ')[1]) < cutLine) {
            ok++
            cutLine = Number(data[y].split(' ')[1])
        }
    }

    OK.push(ok)
}

console.log(OK.join('\n'))
