use std::fmt;

#[derive(Debug)]
#[allow(unused)]
enum UsState {
  Alabama,
  Alaska,
  Atlanta,
  California,
  Chicago,
  NewYork,
  NewJersey,
  York,
  Texas,
  Washington,
}

enum Coin {
  Penny,
  Nickel,
  Dime,
  Quarter(UsState),
}

fn value_in_cents(coin: Coin) -> u8 {
  match coin {
    Coin::Penny => {
      // ... add some code
      1
    }
    Coin::Nickel => 5,
    Coin::Dime => 10,
    Coin::Quarter(us_state) => {
      println!("State quarter from {:?}!", us_state);
      25
    }
  }
}

fn plus_one(n: Option<u8>) -> u8 {
  match n {
    None => 0,
    Some(m) => m + 1,
  }
}

#[allow(unused)]
pub fn run() {
  let some_number = Some(5);
  let some_string = Some(String::from("hello"));
  let nothing: Option<u8> = None;

  println!("{}", value_in_cents(Coin::Penny));
  println!("{}", value_in_cents(Coin::Quarter(UsState::Alabama)));

  println!();

  println!("{}", plus_one(Option::Some(1)))
}
