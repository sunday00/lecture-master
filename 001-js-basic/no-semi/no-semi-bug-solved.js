let a
let b
let c

const arr = [1,2,3]

;[a,b,c] = arr

//
/**
 * 그렇다고 []; 라고 하면 전체적 통일성이 깨지게 됨.
 * 그래서 이런식의 코딩을 할때는 앞에 세미콜론을 붙이기도 함.
 *
 * 이러한 현상은 (), [], {} 모두 발생할 수 있고, 이런 구조 할당 전에 종종 붙이기도 한다고 함.
 *
 * */