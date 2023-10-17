export interface IStudent {
  name: string;
  age: number;
  scores: {
    korean: number;
    math: number;
    society: number;
    science: number;
    english: number;
  };
}

export class Student implements IStudent {
  public scores: { korean: number; math: number; society: number; science: number; english: number };

  constructor(public name: string, public age: number,
      korean: number, math: number, society: number, science: number, english: number
  ) {
    this.scores = {
      korean,
      english,
      math,
      society,
      science
    }
  }
}