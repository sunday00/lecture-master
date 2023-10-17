"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expose_1 = require("./service/expose");
const Student_1 = require("./model/Student");
function main() {
    (0, expose_1.print)(new Student_1.Student('Wick', 30, 40, 100, 100, 100, 60));
}
main();
