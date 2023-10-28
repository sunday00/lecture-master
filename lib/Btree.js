export default class BiSearch {
    constructor() {}

    standard(arr, target, start, end) {
        if(start > end) return -1
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === target) return mid
        else if (arr[mid] > target) return this.standard(arr, target, start, mid - 1)
        else return this.standard(arr, target, mid + 1, end)
    }

    loop(arr, target, start, end) {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)
            if (arr[mid] === target) return mid
            else if (arr[mid] > target) end = mid - 1
            else start = mid + 1
        }
        return -1
    }

    lowerBound(arr, target, start, end) {
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (arr[mid] >= target) end = mid
            else start = mid + 1
        }
        return end
    }

    upperBound(arr, target, start, end) {
        while (start < end) {
            let mid = Math.floor((start + end) / 2)
            if (arr[mid] > target) end = mid
            else start = mid + 1
        }
        return end
    }

    countByRange(arr, left, right){
        let r = this.upperBound(arr, right, 0, arr.length)
        let l = this.lowerBound(arr, left, 0, arr.length)
        return r - l
    }
}
