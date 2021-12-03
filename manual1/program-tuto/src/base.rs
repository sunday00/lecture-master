use std::env;

#[allow(unused_must_use)]
pub fn variables_and_type() {
  let args: Vec<String> = env::args().collect();

  println!("{:?}", args);

  let filename = &args[0];
  let env1 = &args[1];

  println!("{}", filename);
  println!("env1:{}", env1);

  println!("==============================");

  println!("{}", 11_111_156);
  println!("{}", 11_111_156u32);

  println!("{}", 0.3f64 + 0.6f64);

  let tup: (&str, u8, f64, i8, char) = ("aa", 1, 2.0, 3, 'b');

  // let (z, x, c, v, b) = tup;
  let (z, x, ..) = tup;

  println!("{}", tup.4);
  println!("{}, {}", z, x);

  let arr: [u8; 3] = [1, 2, 3];

  println!("{}", arr[1]);

  let returned_value = {
    let x = 0;
    x + 1
  };

  let _maybe_null = {
    let x = 0;
    x + 1;
  };

  println!("{}", returned_value);
  // println!("{}", _maybe_null);  error
  // without semicolon means returning displaying

  // let definitely_returning_value_with_semicolon = {
  //     let x = 0;
  //     // return x + 1;  // not possible
  // };

  let wow = none_semicolon_means_return_wow();
  println!("{}", wow);
}

fn none_semicolon_means_return_wow() -> u8 {
  1
}

pub fn conditional() {
  let args: Vec<String> = env::args().collect();
  let number = if &args.len() == &(3 as usize) { 10 } else { 20 };

  println!("{}", number);

  let mut num = 3;
  while num != 0 {
    println!("{}", num);

    num = num - 1;
  }
  println!("end");

  let fruits = ["apple", "banana", "cherry", "durian"];
  for fruit in fruits.iter() {
    println!("{}", fruit);
  }

  for num in (1..4).rev() {
    println!("{}", num);
  }

  for (k, fruit) in fruits.iter().enumerate() {
    println!("{}, {}", k, fruit);
  }
}

pub fn owner() {
  let mut s = "abc".to_owned();
  // let mut def = "def"; //
  let def = "def"; // &str can't mutable;
  s = s + &def;

  let mut s2 = String::from("abc");
  s2.push_str("def");

  println!("{}, {}", s, s2);

  // let s_origin = "abc";
  // let s_copied = s_origin;

  // println!("{}", s_origin);

  // let S_origin = String::from("ABC");
  // let S_copied = S_origin;

  // println!("{}", S_origin); // not allowed.

  let s_1 = String::from("ABC");
  let s_1_clone = s_1.clone();
  println!("{}", s_1_clone);

  let sa = String::from("hello");
  test(sa);

  // println!(sa); do not this.
}

fn test(arg: String) {
  print!("{}", arg);
}

pub fn refer() {
  let s1 = String::from("fine");
  test2(&s1);
  println!("{}", s1);

  let mut s2 = String::from("fine");
  // chgToSomething(&s1);
  chg_to_something(&mut s2);
  println!("{}", s2);

  let mut s3 = String::from("party");
  let s3_2 = &mut s3;
  chg_to_something(s3_2);
  println!("{}", s3_2);

  let s3_3 = &mut s3;
  chg_to_something(s3_3);
  println!("{}", s3_3);
}

fn test2(arg: &String) {
  println!("{}", arg);
}

// fn chgToSomething(arg: &String) {
fn chg_to_something(arg: &mut String) {
  arg.push_str(" worked!")
}

pub fn what_is_slice() {
  let mut s = String::from("hello ladies, gentleman, kids and world.");

  let word = first_word(&s);

  println!("{}", word);

  s.clear();

  // println!("{}", word);  // can't use here. because
  // world is returned from first_word, which is borrowed string from s,
  // so, s should be not null or empty, but already cleared above...

  println!("{}", first_word("what about this style?"));
}

// fn first_word(s: &String) -> &str {
fn first_word(s: &str) -> &str {
  let bytes = s.as_bytes();

  for (i, &item) in bytes.iter().enumerate() {
    if item == b' ' {
      return &s[..i];
    }
  }

  &s[..]
}
