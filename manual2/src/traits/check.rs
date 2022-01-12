use std::fmt::Display;

pub fn check(_: String) {
  fn gives_higher_i32(one: i32, two: i32) {
    let higher = if one > two { one } else { two };
    println!("{} is higher", higher);
  }

  gives_higher_i32(8, 10);
}

pub fn check2(_: String) {
  fn gives_higher_i32<T>(one: T, two: T)
    where T: PartialOrd + Display {
    let higher = if one > two { one } else { two };
    println!("{} is higher", higher);
  }

  gives_higher_i32(8, 10);
}

pub fn printer(_: String) {
  
  // fn prints(s: &str) {
  // fn prints(s: String) {
  fn prints(s: impl Into<String> + Display) {
    println!("gogo : {}", s);
  }

  prints("Mr.Park");
  prints(String::from("Mr.Park"));
}