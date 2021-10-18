pub fn run () {
  let mut _s = String::new();

  let s1 = "initial string".to_string();
  let s2 = String::from("initial string");

  print!("{}", s1);
  print!("{}", s2);
}

pub fn run2 () {
  let mut s = String::from("hello");
  s.push_str(" world");

  println!("{}", s);

  let s1 = String::from("original");
  let s11 = s1.clone();
  let s2 = String::from("complete");
  let s3 = s11 + &s2; //11 is gone...

  println!("s1:{}, s2:{}, s3:{}", s1, s2, s3);

  use std::ops::Add;
  let ss1 = String::from("original");
  let ss11 = ss1.clone();
  let ss2 = String::from("complete");
  let ss3 = ss11.add(&ss2); //11 is gone...

  println!("s1:{}, s2:{}, s3:{}", ss1, ss2, ss3);

}

pub fn run3 (){
  let greet = "안녕하세요";
  // let s = greet[0]; 불가
  let s = &greet[0..3];
  println!("{}", s);

  let e_greet = "hello";
  // let s = greet[0]; 불가
  let se = &e_greet[0..3];
  println!("{}", se);

  let sa = greet.chars();
  println!("{:?}", sa);
  for c in sa {
    println!("{}", c);
  }

  
}
