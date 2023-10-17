import {print} from "./service/expose";
import {Student} from "./model/Student";

function main () {
  print(new Student('Wick', 30, 40, 100, 100, 100, 60))
}

main();