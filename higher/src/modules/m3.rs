use super::sub_modules::*;

pub fn run () {
  use m3r1::Iterator;

  let mut counter = m3r1::Counter{ count: 0 };

  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
}

pub fn run2 () {
  m3r2::run()
}