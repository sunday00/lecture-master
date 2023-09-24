const someDoing1 = Promise.resolve(3)
const someDoing2 = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('apple'), 1)
    })
}

const someDoing3 = () => {
    return new Promise((resolve, reject) => resolve([1, 2, 3]))
}

await console.log(someDoing1, someDoing2().then(r => r), someDoing3())

await Promise.all([someDoing1, someDoing2(), someDoing3()])
    .then((r) => console.log(r))

await Promise.race([someDoing1, someDoing2(), someDoing3()])
    .then((r) => console.log(r))