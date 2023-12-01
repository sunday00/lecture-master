let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
input.shift();
let arr = input.map(Number);
let answer = [];


function isPrime(n){
    if(n<2){
        return false;
    }
    for(let i = 2; i<= Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}

while(arr.length != 0){
    if(isPrime(arr[0])){
        answer.push(arr[0]);
        arr.shift();
    }else{
        arr[0]++;
    }
}

console.log(answer.join('\n'));
