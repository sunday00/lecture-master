pub fn maybe (_: String) {
  // sniff if

  let num : u8 = 5;
  let state: String;
  match num {
    0 => state = String::from("none"),
    5 => state = String::from("middle"),
    10 => state = String::from("strong"),
    _ => state = String::from("err"),
  }

  println!("{}", state)
}

pub fn define (_: String) {
  let n = 1;
  let m = match n {
    1 => 100,
    _ => 0
  };

  println!("{}", m)
}

pub fn mul (_: String) {
  let x = String::from("Bat Man");
  let age = 5;

  let result = match (x, age) {
    (x, age) if age > 3 => String::from(x),
    _ => String::new()
  };

  println!("{}", result)
}

pub fn mul2 (_: String) {
  let x: &str = &String::from("Bat Man");
  let age = 5;

  let result = match (x, age) {
    ("Bat Man", 5) => String::from(x),
    _ => String::new()
  };

  println!("{}", result)
}

pub fn match_then_as (_: String) {
  fn check_number(i: u8){
    match i {
      n @ 4 => println!("{}!!!!", n),
      n @ 14 => println!("{}!!!!!!!!", n),
      _ => ()
    }
  }

  check_number(1);
  check_number(4);
  check_number(14);
  check_number(19);
}
