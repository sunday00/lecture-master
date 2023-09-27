const obj = {
    a: 1,
    c: 1,
    d: 1,
}

const { x } = obj
console.log(x) // undefined

const { d =  2, n = 3 } = obj
console.log(d, n) // d has value. 2 is ignored. n is undefined on obj. so, default value 3 apply. // 1, 3

const { c: cc } = obj
console.log(cc, obj)

const { m: mm = 100 } = obj  // if obj has key m then alloc mm, else undefined then mm is 100
console.log(mm)

