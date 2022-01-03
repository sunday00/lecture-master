pub fn escape () {
  println!(r#"When you meet someone who you know, say "hello, bub, 
  how has you been?", but they just answer "nothing"... It's 
  not a big deal, however, It maybe mean they just don't wanna talk
  with you."#);

  println!(r#"#hash?"#);
  println!(r##"#hash?"##);
  println!(r####"If you wanna use saying mark " and 
    hash # like this. "#hash-tag" ! "####);
}

pub fn varvar () {
  let r#if = 6;

  println!("{}", r#if);

  fn r#return() -> u8 {
    8
  }

  println!("{}", r#return());

  for i in 33..127 as u8 {
    print!("{}", i as char)
  }
  println!("")
}

pub fn byte () {
  println!("{:?}", b"hello")
}

pub fn hex(s: String){
  let ca: Vec<char> = s.chars().collect();
  println!("{:X}", ca[0] as u32);
}

pub fn pointer () {
  let n = 9;
  let n_r = &n;

  println!("{:p}", n_r)
}

pub fn convert(s: String){
  let n: u32 = s.parse::<u32>().unwrap();
  println!("2b {:b}", n);
  println!("8o {:o}", n);
  println!("16x {:X}", n);
}

pub fn etc(){
  println!("ordering numbered {2}, {1}, {0}", 100, 200, 300 );
  println!("named print {name}, {color}, {quantity}",
     name = "apple", color = "red", quantity = 3 );
  println!("{name:!<8.10}", name="ko");
  println!("{name:!^8.10}", name="ko");
}