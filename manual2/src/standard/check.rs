pub fn arrr(_: String) {
  let cities = ["Berirut", "Tel Aviv", "Nicosia"];

  for city in cities {
    println!("{}", city);
  }

  println!("{}", '가'.escape_unicode());

  println!("{}", char::from(99));

  println!("{}", 8_u8.checked_add(3).unwrap());
}

pub fn define_add(_: String) {
  use std::ops::Add;

  #[derive(Debug, Copy, Clone, PartialEq)]
  struct Point {
    x: u8,
    y: u8
  }

  impl Add for Point {
    type Output = Self;

    fn add(self, other: Self) -> Self {
      Self {
        x: self.x + other.x,
        y: self.y + other.y
      }
    }
  }
}

pub fn vvv(_: String) {
  let mut v = vec![1,1,2,2,3,4,6,9];
  v.dedup();
  println!("{:?}", v);
}


