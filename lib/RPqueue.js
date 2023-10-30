module.exports = class PQueue {
    elements = []

    comparator(a, b) {
        if(typeof a === 'number' && typeof b === 'number') return a - b
        else {
            a = a.toString()
            b = b.toString()

            if(a === b) return 0

            return (a > b) ? 1 : -1
        }
    }

    constructor(comparator) {
        if(comparator) this.comparator = comparator
    }

    compare(a, b) {
        return this.comparator(this.elements[a], this.elements[b])
    }

    swap(a, b) {
        let tmp = this.elements[a]
        this.elements[a] = this.elements[b]
        this.elements[b] = tmp
    }

    forEach(fn) {
        return this.elements.forEach(fn)
    }


    isEmpty() {
        return this.elements.length === 0
    }

    size() {
        return this.elements.length
    }

    peek() {
        if(this.isEmpty()) return undefined
        return this.elements[0]
    }

    deq() {
        const first = this.elements[0]
        const last = this.elements.pop()
        const size = this.elements.length

        if(size === 0) return first

        this.elements[0] = last
        let current = 0

        while(current < size) {
            let largest = current
            const left = (2 * current) + 1
            const right = (2 * current) + 2

            if(left < size && this.compare(left, largest) <= 0) {
                largest = left
            }

            if(right < size &&  this.compare(right, largest) <= 0) {
                largest = right
            }

            if(largest === current) break

            this.swap(largest, current)
            current = largest
        }

        return first
    }

    enq (element) {
        const size = this.elements.push(element)
        let current = size - 1 // last element

        while (current > 0) {
            let parent = Math.floor((current - 1) / 2)

            if(this.compare(parent, current) <= 0) break

            this.swap(parent, current)
            current = parent
        }

        return size
    }
}
