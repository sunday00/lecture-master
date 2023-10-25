let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// let input = fs.readFileSync('./1.txt').toString().split('\n')

// for(let line of input) {
  let line = input[0]
  const [h, m] = line.split(' ').map(hm => Number(hm))

  if (m > 45) {
    console.log(`${h} ${m-45}`)
  } else if (h > 0) {
    console.log(`${h-1} ${m + 15}`)
  } else {
    console.log(`23 ${m + 15}`)
  }
// }

