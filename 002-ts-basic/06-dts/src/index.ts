import _ from 'lodash'

///<reference path="./type/name-different.d.ts" />
import {Ho} from 'ho'

import {Custom} from "./type/custom";

console.log(_.camelCase('abb bbb ccc hello world why this err...'))

const hoo: Ho = {
    x: ''
}

console.log(hoo)

const cst: Custom = {
    name: 'ccc'
}

console.log(cst)