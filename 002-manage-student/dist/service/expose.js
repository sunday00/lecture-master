"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.print = void 0;
const score_1 = require("./score");
function print(student) {
    const avg = (0, score_1.calculateAverage)(student);
    console.log(`${student.name} (${student.age}) 
    - avg: ${avg} grd: ${(0, score_1.assignGrade)(avg)}`);
}
exports.print = print;
