enum Position {
  BACKEND,
  FRONTEND,
  DESIGNER,
  PROJECT_MANAGER
}

class Person {
  name: string;
  age: number;
  tel?: string;
  position?: Position;
}

const getPersonSkipNullableInfo = (person: Person) => {
  return person
}

getPersonSkipNullableInfo({name: 'OnlyNeedNameAndAge', age: 2 })

const getPartialValue = (part: Partial<Person>) => {
  console.log(part)
}

getPartialValue({name: 'Not need age, position'})

const getPersonInfo = (person: Required<Person>) => {
  console.log(person)
}

getPersonInfo({ name: 'Unable to skip nullable', age: 1, tel: '111-1111', position: Position.BACKEND })

const unableToUpdate = (person: Readonly<Person>) => {
  // person.age = 1 // impossible
}

const nameAndPosition = (boss: Pick<Person, 'name'|'position'>) => {
  return boss
}

nameAndPosition({name: 'KinKong', position: Position.PROJECT_MANAGER})

const anonymousPerson = (person: Omit<Person, 'name'>) => {
  return person
}

anonymousPerson({ age: 2, position: Position.FRONTEND })


