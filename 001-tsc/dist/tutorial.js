"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    if (!name)
        return;
    return { name: name };
}
exports.default = sayHello;
console.log(sayHello('K'));
