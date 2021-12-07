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