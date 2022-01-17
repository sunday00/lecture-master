pub fn check(_: String) {
  let d1: u8 = Default::default();
  let d2: String = Default::default();
  let d3: bool = Default::default();

  println!("{} {} {}", d1, d2, d3)
}

#[allow(dead_code)]
pub fn default_struct(_: String){
  
  #[derive(Debug)]
  struct Character {
    name: String,
    age:u8,
    height: u8,
    weight: u8,
    lifestate: Lifestate,
    validated: bool,
  }

  #[derive(Debug)]
  enum Lifestate {
    Alive,
    Dead,
    Uncertain,
  }

  impl Character {
    fn new(name: String, age: u8, height:u8, weight:u8, alive: bool) -> Self {
      Self {
        name,
        age,
        height,
        weight,
        lifestate: if alive {
          Lifestate::Alive
        } else {
          Lifestate::Dead
        },
        validated: true,
      }
    }

    fn height(mut self, height: u8) -> Self {
      self.height = height;
      self.validated = false;
      self
    }

    fn weight(mut self, weight: u8) -> Self {
      self.weight = weight;
      self.validated = false;
      self
    }

    fn name(mut self, name: &str) -> Self {
      self.name = name.to_string();
      self.validated = false;
      self
    }

    fn build(mut self) -> Result<Character, String> {
      if self.height < 200 && self.weight < 255 && !self.name.to_lowercase().contains("devil") {
        self.validated = true;
        Ok(self)
      } else {
        Err("some value is not correct".to_string())
      }
    }
  }

  impl Default for Character {
    fn default() -> Self {
      Self{ 
        name: "Hong Kil Dong".to_string(),
        age: 20,
        height: 170,
        weight: 60,
        lifestate: Lifestate::Alive,
        validated: true,
      }
    }
  }

  // let hong = Character::default().height(171).weight(74);
  let hong = Character::default().height(171).weight(74).build();

  println!("{:?}", hong);
}
