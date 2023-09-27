function alpha (outerV) {
    const add = 2

    return function inner (innerV) {
        console.log(`${outerV}, ${add + innerV}`)
    }
}

const innerFunction = alpha('outer')
innerFunction(1) // 'outer, 3'

// closure 에서는 이미 호출하여 외부 함수가 끝난 뒤에도 메모리는 여전히 외부 함수의 변수들을 내부함수가 사용한다면 유지하고 있는다.