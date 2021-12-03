pub struct Rectangle {
  pub length: u8,
  pub width: u8
}

impl Rectangle {
  pub fn can_hold(&self, other: &Rectangle) -> bool {
    self.length > other.length && self.width > other.width
  }
}

pub fn add_two(a: u8) -> u8 {
  a + 2
}

pub fn greeting(_name: &str) -> String {
  format!("Hello, ~!")
}

pub fn intentional_panic (num: u8) {
  if num % 2 == 0 {
    panic!("even");
  } else {
    panic!("odd");
  }
}

pub fn stupid10 (a: u8) -> u8 {
  println!("Oh~! a! a = {}.", a);
  10
}