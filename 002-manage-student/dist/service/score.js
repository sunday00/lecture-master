"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateAverage = exports.assignGrade = void 0;
function assignGrade(average) {
    if (average >= 90)
        return 'A';
    else if (average >= 80)
        return 'B';
    else if (average >= 70)
        return 'C';
    else if (average >= 60)
        return 'D';
    else
        return 'F';
}
exports.assignGrade = assignGrade;
function calculateAverage(student) {
    return (student.scores.korean
        + student.scores.english
        + student.scores.math
        + student.scores.science
        + student.scores.society) / Object.keys(student.scores).length;
}
exports.calculateAverage = calculateAverage;
