export default class Queue {
    constructor() {
        this.items = {}
        this.headIndex = 0
        this.tailIndex = 0
    }

    en(item) {
        this.items[this.tailIndex] = item
        this.tailIndex++
    }

    de() {
        const item = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        return item
    }

    peek() {
        return this.items[this.headIndex]
    }

    length() {
        return this.tailIndex - this.headIndex
    }
}
