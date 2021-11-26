use std::ops::Add;

#[derive(Debug, PartialEq)]
struct Point {
  x: u8,
  y: u8
}

impl Add for Point {
  type Output = Point;

  fn add(self, other: Point) -> Point {
    Point{
      x: self.x + other.x,
      y: self.y + other.y,
    }
  }
}

pub fn run () {
  assert_eq!(Point{x:1, y:0} + Point{x:2, y:3}, Point{x:3, y:3})
}

pub fn run2 () {
  #[derive(Debug)]
  struct Millimeters(u16);
  struct Meters(u16);

  impl Add<Meters> for Millimeters {
    type Output = Millimeters;
    fn add(self, other: Meters) -> Millimeters {
      Millimeters(self.0 + (other.0 * 1000))
    }
  }

  let mil = Millimeters(0);
  let met = Meters(2);

  println!( "{:?}", (mil + met) );
}