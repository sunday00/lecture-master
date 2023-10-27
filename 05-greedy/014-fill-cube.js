let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let [B, C, ...cubes] = input.split('\n')

let BOX = +B.split(' ').reduce((acc,cur) => +acc * +cur)

cubes = cubes.map(c => c.split(' ').map(Number)).sort((a,b) => b[0] - a[0])

for(let cube of cubes) {
    const cubeSize = (2 ** cube[0]) ** 3

}
