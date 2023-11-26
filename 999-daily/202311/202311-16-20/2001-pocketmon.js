let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [info, ...data] = input.split('\n')
let [tot, n] = info.split(' ').map(Number)

let book1 = new Map()
let book2 = []

for(let i=0; i<tot; i++) {
    book1.set(data[i], i+1)
    book2.push(data[i])
}

let ans = []
for(let i=tot; i<data.length; i++) {
    const target = data[i]

    if (isNaN(Number(target))) {
        console.log(book1.get(target))
    } else {
        console.log(book2[Number(target) - 1])
    }
}



