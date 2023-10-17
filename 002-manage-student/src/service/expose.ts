import {IStudent} from "../model/Student";
import {assignGrade, calculateAverage} from "./score";

export function print(student: IStudent) {
  const avg = calculateAverage(student)
  console.log(`${student.name} (${student.age}) 
    - avg: ${avg} grd: ${assignGrade(avg)}`)

}