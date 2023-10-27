let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...MEETINGS] = input.split('\n')

let meetings = MEETINGS.sort((a,b) => {
    let aa = a.split(' ').map(Number)
    let bb = b.split(' ').map(Number)
    if(aa[0] !== bb[0]) return aa[1] - bb[1]
    return aa[0] - bb[0]
})

let cnt = 1
let cur = 0
for (let i=1; i < meetings.length; i++) {
    const prev = meetings[cur].split(' ')
    const meet = meetings[i].split(' ')
    if (Number(prev[1]) <= Number(meet[0])) {
        cnt++
        cur = i
    }
}

console.log(cnt)
