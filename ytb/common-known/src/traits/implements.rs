use std::fmt;

pub fn implement(_:String){
  struct ThingsToAdd {
    ft: u8,
    st: f32
  }

  let r = ThingsToAdd{ft: 10, st: 2.2};
  println!("{}", r.ft  as f32 + r.st);
}

pub fn making(_: String){
  struct Dog {
    name: String
  }

  #[derive(Debug)]
  struct Cat {
    name: String,
    age: u8,
  }

  trait Animal {
    fn bark(&self);
    fn run(&self);
  }  

  impl Animal for Dog {
    fn bark(&self) {
      println!("bow wow");
    }

    fn run(&self) {
      println!("{} is running... wadada~", self.name)
    }
  }

  impl Animal for Cat {
    fn bark(&self) {
      println!("bow wow");
    }

    fn run(&self) {
      println!("{} is running... wadada~", self.name)
    }
  }

  impl fmt::Display for Cat {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "name : {}, age : {}", self.name, self.age)
    }
  }

  let rover = Dog{
    name: "Rover".to_string(),
  };

  rover.bark();
  rover.run();

  let cc = Cat{
    name: "CC".to_string(),
    age: 3
  };

  println!("{}", cc.to_string());
  println!("{}", cc)
}
