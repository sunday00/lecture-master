struct CustomSmartPointer {
  data: String,
}

impl Drop for CustomSmartPointer {
  fn drop(&mut self){
    println!("Clear the memory for : {}", self.data)
  }
}

pub fn run1(){
  let _c = CustomSmartPointer { data: String::from("stuff") };
  let _e = CustomSmartPointer { data: String::from("early ") };
  let _d = CustomSmartPointer { data: String::from("others ") };

  println!("custom smart pointers created");

  drop(_e) // warning : not _e.drop()
}

use either::*;
use std::fmt;

#[derive(PartialEq)]
#[derive(Debug)]
enum AColor {
  Red, Blue, _Yellow
}

#[derive(Debug)]
enum BColor {
  Orange, Purple, Green
}

impl fmt::Display for AColor {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
      write!(f, "{:?}", self)
      // or, alternatively:
      // fmt::Debug::fmt(self, f)
  }
}

impl fmt::Display for BColor {
  fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
      write!(f, "{:?}", self)
  }
}

pub fn run2 (){
  let color = mixing_color(&AColor::Blue, &AColor::Red);

  println!("{:?}", color.to_string());
}

fn mixing_color (a: &'static AColor, b: &'static AColor) -> Either<&'static AColor, &'static BColor> {
  if a == b {
    Left(a)
  } else {
    // Right(&BColor::Green)
    match a {
      AColor::Blue => {
        match b {
          AColor::Red => Right(&BColor::Purple),
          AColor::_Yellow => Right(&BColor::Green),
          _ => { panic!("Something wrong in mixing colors..") }
        }
      },
      AColor::Red => {
        match b {
          AColor::Blue => Right(&BColor::Purple),
          AColor::_Yellow => Right(&BColor::Orange),
          _ => { panic!("Something wrong in mixing colors..") }
        }
      },
      AColor::_Yellow => {
        match b {
          AColor::Red => Right(&BColor::Orange),
          AColor::Blue => Right(&BColor::Green),
          _ => { panic!("Something wrong in mixing colors..") }
        }
      },
    }
  }
}