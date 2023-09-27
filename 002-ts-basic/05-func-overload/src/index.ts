function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: any, b: any) {
    return a + b
}

console.log(add('vv' , 'zz'))
console.log(add(1 , 3))

function add2<T extends string|number>(a:T, b: T): T extends string ? string : number {
    return <any>a + <any>b
}