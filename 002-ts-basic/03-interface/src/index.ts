import('./array')

interface GetAge {
    (): number
}

interface User {
    readonly name: string
    getName: () => string
    getAge: GetAge
}

interface SetAge {
    setAge: (age: number) => void
}

class Member implements User, SetAge {
    age: number = 0

    getName(): string {
        return this.name;
    }

    readonly name: string = '';

    getAge() {
        return 1
    }

    setAge(age: number) {
        this.age = age
    }
}

