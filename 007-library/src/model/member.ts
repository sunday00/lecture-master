export enum Role {
  LIBRARIAN,
  MEMBER
}

export abstract class User {
  constructor(public name: string, public age: number) {}
  abstract getRole(): Role
}

export class Member extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  getRole(): Role {
    return Role.MEMBER
  }
}

export class Librarian extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }

  getRole(): Role {
    return Role.LIBRARIAN
  }
}

