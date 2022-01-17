pub fn check(_: String) {
  let value = 7;
  let other = &value;

  println!("{}", value == *other);
}

use std::ops::Deref;
use std::ops::DerefMut;

pub fn basic(_: String){
  struct Example<T>{
    value: T
  }

  impl <T> Deref for Example<T>{
    type Target = T;

    fn deref(&self) -> &Self::Target {
      &self.value
    }
  }

  let x = Example{ value: 3};
  assert_eq!(3, *x);
}

pub fn hold_number(_: String) {
  struct HoldsANumber(u8);

  impl HoldsANumber {
    fn prints_the_number_times_two(&self){
      println!("{}", self.0 * 2);
    }
  }

  impl Deref for HoldsANumber{
    type Target = u8;

    fn deref(&self) -> &Self::Target {
      &self.0
    }
  }

  impl DerefMut for HoldsANumber{
    fn deref_mut(&mut self) -> &mut Self::Target {
      &mut self.0
    }
  }

  let mut my_number = HoldsANumber(20);
  *my_number = 30;
  println!("{:?}", my_number.checked_sub(100) );
  my_number.prints_the_number_times_two();
}

#[allow(dead_code)]
pub fn game(_: String) {
  struct Character {
    name: String,
    strength: u8,
    hit_points: i8,
    alignment: Alignment,
  }

  impl Character {
    fn new(
      name: String,
      strength: u8,
      hit_points: i8,
      alignment: Alignment,
    ) -> Self {
      Self {
        name,
        strength,
        hit_points,
        alignment,
      }
    }
  }

  enum Alignment {
    Good, Natural, Evil,
  }

  impl Deref for Character {
    type Target = i8;
    fn deref(&self) -> &Self::Target {
      &self.hit_points
    }
  }

  let hero = Character::new("Knight".to_string(), 10, 100, Alignment::Good);
  println!("{:?}", *hero);
}
