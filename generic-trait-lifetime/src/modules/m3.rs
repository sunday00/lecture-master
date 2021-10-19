pub fn run5 () {
  let r: &u8;
  {
    let _x = 5;
    // r = &_x; //impossible;
  }

  let y = 6;
  r = &y; // possible;
  println!("{}", r);
}

fn longest<'a> ( x: &'a str, y: &'a str) -> &'a str{
  if x.len() > y.len() {
    x
  } else {
    y
  }
}

pub fn run6 () {
  let string1 = String::from("hello world");
  let string2: &'static str = "why so serious?";

  let result = longest(string1.as_str(), string2);
  println!("longest one : {}", result);
}

#[derive(Debug)]
struct ImportantExcerpt<'a> {
  part: &'a str
}

impl<'a> ImportantExcerpt<'a> {
  fn level(&self) -> u8 {
    3
  }

  fn announce_and_return_part (&self, announcement: &str) -> &str {
    println!("Attention please: {}", announcement);
    self.part
  }
}

pub fn run7 () {
  let novel = String::from("Call me Ishmael. Some years ago...");
  let first_sentence = novel.split('.')
        .next()
        .expect("Could not find a '.' ");
  let i = ImportantExcerpt { part: first_sentence };

  println!("{:?}", i);
}

use std::fmt::Display;

fn longest_with_an_announcement <'a, T>(x: &'a str, y:&'a str, ann: T) -> &'a str
  where T: Display {
    println!("Announcement: {}", ann);
    if x.len() > y.len() {
      x
    } else {
      y
    }
}

pub fn run8 () {
  
}