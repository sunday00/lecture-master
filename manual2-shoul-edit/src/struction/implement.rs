pub fn animal (_:String) {

  #[derive(Debug)]
  struct Animal {
    age: u8,
    animal_type: AnimalType,
  }

  #[derive(Debug)]
  enum AnimalType {
    Cat, 
    Dog, 
  }

  impl Animal {
    fn new() -> Self {
      Self {
        age: 10,
        animal_type: AnimalType::Cat
      }
    }

    fn change_to_dog(&mut self) {
      println!("changing animal to dog");
      self.animal_type = AnimalType::Dog;
    }

    fn change_to_cat(&mut self) {
      println!("changing animal to cat");
      self.animal_type = AnimalType::Cat;
    }

    fn check_type(&self){
      match self.animal_type {
        AnimalType::Dog => println!("this is dog..."),
        AnimalType::Cat => println!("this is cat...")
      }
    }
  }

  let mut animal = Animal::new();
  animal.check_type();
  animal.change_to_dog();
  animal.check_type();
  animal.change_to_cat();
  animal.check_type();
}

