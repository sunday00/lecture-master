pub fn f (s: String) {
  fn return_type <T>(_: T) -> &'static str {
    std::any::type_name::<T>()
  }

  println!( "{}", return_type(s) )
}

use std::fmt::Debug;

pub fn inner_debug (s: String) {
  fn print_number<T: Debug>(n: T) -> String{
    format!("{:?}", n)
  }

  println!("{}", print_number(s))
}

pub fn with_struct (_:String) {

  #[derive(Debug)]
  struct Animal {
    name: String,
    age: u8,
  }

  fn print_item<T: Debug>(item: T) {
    println!("Here is your item: {:?}", item);
  }

  let chalie = Animal {
    name: "Chalie".to_string(),
    age: 1,
  };

  let number = 55;

  print_item(chalie);
  print_item(number);

}

use std::fmt::Display;
use std::cmp::PartialOrd;

pub fn partial_ord(_:String){
  fn compare_and_display<T: Display, U: Display + PartialOrd>(statement:T, num_1: U, num_2: U) {
    println!("{}! Is {} grater than {}? {}", statement, num_1, num_2, num_1>num_2);
  }

  compare_and_display("Listen up !", 9, 8)
}

pub fn partial_ord2(_:String){
  fn compare_and_display<T, U>(statement:T, num_1: U, num_2: U) 
    where 
      T: Display, 
      U: Display + PartialOrd 
  {
    println!("{}! Is {} grater than {}? {}", statement, num_1, num_2, num_1>num_2);
  }

  compare_and_display("Listen up !", 9, 8)
}


use std::str::FromStr;

pub fn f2 (s: String) {
  fn adding <T, U> (n: T, m: U) -> String 
    where
      T: Display + FromStr,
      U:Display + FromStr
  {
    let t = format!("{}", n);
    let u = format!("{}", m);

    match t.parse::<u8>() {
      Err(_) => {
        let mut v = String::new();
        v.push_str(&t);
        v.push_str(&u);
        format!("{}, {}, {}", t, u, v)
      },
      _ => {
        let i: u8 = t.parse().unwrap();
        let y: u8 = u.parse().unwrap();
        format!("{}, {}, {}", i, y, i + y)
      },
    }
  }

  let ss: Vec<&str> = s.split("-").collect();

  println!("{}", adding(ss[0].to_string(), ss[1].to_string()))
}


