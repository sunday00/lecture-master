use std::any::type_name;

fn type_of<T>(_: T) -> &'static str {
    type_name::<T>()
}

pub fn pri(_: String){
  let g = ('a', "a", ' ', 'Ꮔ', '🍿', "응", '응', 1);

  println!("{:?}", type_of(g))
}

pub fn itoa(x: String) {
  // let number = 100; // default type = i32
  let number2: u8 = x.parse().expect("\n\n\x1b[38;5;9mcan't be parsed. insert number 0 ~ 255\x1b[0m\n\n");
  // let number3: u16 = 100;
  let number4 = 100;

  // println!("{}", number as char); // impossible. can be only u8
  println!("{}", number2 as char);
  // println!("{}", number3 as char); // impossible. can be only u8, not just unsigned.
  println!("{}", number4 as u8 as char); // double as can be cast to cast
}

pub fn char_len(c: String){
  println!("Size of byte {} : {}", c, c.len());
  println!("Size of letters {} : {}", c, c.chars().count());
}
