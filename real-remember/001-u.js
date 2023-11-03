// @FAIL...
let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

let data = new Array(input.length).fill(null)
for(let i=0;i<input.length;i++) {
    data[i] = input[i].split(' ')
}

let directions = [
    [[0, -1], [1, 0], [0, 1]],
    [[-1, 0], [0, 1], [1, 0]],
    [[1, 0], [0, 1], [-1, 0]],
    [[0, 1], [1, 0], [0, -1]],
]

let curState = {
    totalCnt: 0,
    sideCnt: [0,0,0,0]
}

function canGo(cur, direction) {
    const nxtX = cur[0]+direction[0]
    const nxtY = cur[1]+direction[1]
    const nxtC = data[nxtX][nxtY]
    if(cur[2] !== nxtC) return false
    if(nxtX < 0 || nxtY < 0) return false
    return !(nxtX > data[0].length || nxtY > data.length);
}

let maxCnt = 0

for(let i=0;i<data.length;i++) {
    for(let j=0;j<data[i].length;j++){
        let c = data[i][j]

        for(let dg of directions) {
            let  cur = [i, j, c]
            let did = 0
            for(let d of dg ){
                while(canGo(cur, d)) {
                    cur[0] += d[0]
                    cur[1] += d[1]
                    cur[2] = d[cur[0]][cur[1]]
                    curState.sideCnt[did]++
                    curState.totalCnt++
                }
                did++
            }
            // if()
        }
    }
}
