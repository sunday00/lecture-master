pub fn run () {
  trait Pilot {
    fn fly(&self);
  }

  trait Wizard {
    fn fly(&self);
  }

  struct Human;

  impl Pilot for Human {
    fn fly(&self) {
      println!("Ignite Engine")
    }
  }

  impl Wizard for Human {
    fn fly(&self) {
      println!("Head to sky with bloom")
    }
  }

  impl Human {
    fn fly(&self) {
      println!("Flutter both arms to try lol")
    }
  }

  let human = Human;
  human.fly();
  Pilot::fly(&human);
  Wizard::fly(&human);

  
}

pub fn run2 () {
  trait Animal {
    fn baby_name() -> String;
  }

  struct Dog;

  impl Dog {
    fn baby_name() -> String {
      String::from("Spot")
    }
  }

  impl Animal for Dog{
    fn baby_name() -> String {
      String::from("puppy")
    }
  }

  // println!("{}", Animal::baby_name())
  println!("{}", <Dog as Animal>::baby_name())

}
