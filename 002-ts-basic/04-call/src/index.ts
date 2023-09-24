interface Animal {
    cry(): string
}

function howl(this: Animal) {
    console.log(this.cry())
}

class Cat implements Animal{
    cry() {
        return 'meow~'
    }
}

const cat = new Cat()
howl.call(cat)