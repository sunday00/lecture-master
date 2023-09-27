let a
let b
let c

const arr = [1,2,3]

[a,b,c] = arr

//
/**
 * 구조분해 할당 시에 앞에 할당 키워드가 없으면, JS는 이걸 앞줄에 붙이는 에러가 남
 *
 * const arr = [1,2,3] [a,b,c] = arr
 *
 * */