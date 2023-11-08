let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [S, N] = input.split('\n')
// let [N, ...str] = input.split('\n')

// @info: logic start
// @@info: prepare for using
let result = new Array(26).fill(-1)

for(let i=0;i<input.length;i++){
    if(result[input[i].charCodeAt() - 97] === -1) result[input[i].charCodeAt() - 97] = i
}

console.log(result.join(' '))

console.log(`         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |`)
