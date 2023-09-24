"use strict";
function howl() {
    console.log(this.cry());
}
class Cat {
    cry() {
        return 'meow~';
    }
}
const cat = new Cat();
howl.call(cat);
