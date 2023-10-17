import {IStudent} from "../model/Student";

export function assignGrade(average: number): string {
  if(average >= 90) return 'A'
  else if(average >= 80) return 'B'
  else if(average >= 70) return 'C'
  else if(average >= 60) return 'D'
  else return 'F'
}

export function calculateAverage(student: IStudent): number {
  return (student.scores.korean
    + student.scores.english
    + student.scores.math
    + student.scores.science
    + student.scores.society) / Object.keys(student.scores).length;
}