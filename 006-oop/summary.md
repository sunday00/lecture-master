# upcast - implicit
```typescript
class Animal {}
class Dog extends Animal {
  name: String
}

const dog = new Dog()

const eat = (animal: Animal) => {
  console.log(animal.name + ' eats some food')
}

eat(dog)
```
- 자식 객체가 조상 클래스로 캐스팅

# downcast - explicit
```typescript
// ...some other code
const commonFunction = (animal: Animal): Animal => {
  //... some action
  
  return animal;
}

const resultAnimal = commonFunction(dog) as Dog

resultAnimal.bark()
```
- 조상객체를 자식 객체로 캐스팅
- 조상객체를 사용하는 라이브러리를 통과하나 구체화된 객체를 확신하고 사용할때