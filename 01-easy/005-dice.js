let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// let input = fs.readFileSync('./1.txt').toString().split('\n')

let arr = input[0].split(' ').map(Number)
let setArr = Array.from(new Set(arr))

if (setArr.length === 1) {
  console.log(10000 + setArr[0] * 1000)
} else if (setArr.length === 2) {
  if(arr.filter(n => n === setArr[0]).length === 2){
    console.log(1000 + setArr[0] * 100)
  } else {
    console.log(1000 + setArr[1] * 100)
  }
} else {
  console.log(100 * (Math.max(...arr)))
}
