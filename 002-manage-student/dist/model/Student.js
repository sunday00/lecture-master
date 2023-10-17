"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, age, korean, math, society, science, english) {
        this.name = name;
        this.age = age;
        this.scores = {
            korean,
            english,
            math,
            society,
            science
        };
    }
}
exports.Student = Student;
