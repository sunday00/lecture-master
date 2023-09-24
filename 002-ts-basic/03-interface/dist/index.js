"use strict";
import('./array.js');
class Member {
    constructor() {
        this.age = 0;
        this.name = '';
    }
    getName() {
        return this.name;
    }
    getAge() {
        return 1;
    }
    setAge(age) {
        this.age = age;
    }
}
