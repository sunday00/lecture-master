const a = Array.from(Array(10e7).keys())

function BiSearch(arr, target, start, end) {
    if(start > end) return -1
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) return mid
    else if (arr[mid] > target) return BiSearch(arr, target, start, mid - 1)
    else return BiSearch(arr, target, mid + 1, end)
}

console.log(BiSearch(a, 1456, 0, a.length-1))
