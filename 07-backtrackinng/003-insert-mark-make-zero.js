let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...CASES] = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let answers = []

for(let CASE of CASES) {
    let arr = []
    for(let i=1;i<=CASE;i++) arr.push(i)

    let operator = [' ', '+', '-']
    let selected = []

    let answer = []

    function dfs(arr) {
        if(selected.length === arr.length - 1) {
            let result = ''
            for(let i=0;i<selected.length;i++) {
                result += arr[i]
                result += selected[i]
            }
            result += arr[arr.length-1]

            const tmps = result.replaceAll(' ', '').split('+')

            let tmpCalc = 0
            for(let tmp of tmps) {
                if(tmp.includes('-')) {
                    let [left, ...right] = tmp.split('-')
                    tmpCalc += Number(left)
                    tmpCalc -= right.reduce((acc,cur) => acc+Number(cur), 0)
                } else {
                    tmpCalc += Number(tmp)
                }
            }

            if (tmpCalc === 0) answer.push(result)

            return
        }

        for(let i=0; i<operator.length;i++) {
            selected.push(operator[i])
            dfs(arr)
            selected.pop()
        }
    }

    dfs(arr)

    answers.push(answer.sort((a,b) => a-b).join('\n'))
}

console.log(answers.join('\n\n'))
