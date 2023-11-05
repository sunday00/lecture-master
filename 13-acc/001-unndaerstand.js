let n = 8;
let data = [3,2,4,1,2,2,1,5]

let sumValue = 0
let prefix = [0]

for(let i of data) {
    sumValue += i
    prefix.push(sumValue)
}

let left = 4
let right = n
console.log(prefix[right] - prefix[left - 1])
