let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().trim().split('\n')

/**
 * 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.
 *
 * 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이
 * 첫 수로 주어지고, 이어서 N명의 점수가 주어진다.
 * 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.
 * 각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다
 * */

let results = ''

for(let i=1; i<n.length; i++) {
  let [c, ...r] = n[i].split(' ').map(Number)
  let sum = r.reduce((acc, cur) => acc + cur, 0)
  let avg = sum / c
  let highs = r.filter(i => i > avg)

  results += ((highs.length / c) * 100).toFixed(3) + '%\n'
}

console.log(results)