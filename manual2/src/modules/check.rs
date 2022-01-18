pub fn check(_: String) {

  mod print_things {
    use std::fmt::Display;
  
    pub fn prints_one_thing<T>(input: T) 
      where T: Display{
        println!("{}", input);
    }
  
  }

  use print_things::prints_one_thing;

  prints_one_thing(6);
  prints_one_thing("Trying to print".to_string());
  
}

#[allow(unused_variables)]
#[allow(dead_code)]
pub fn billy(_: String) {
  mod print_things {

    use std::fmt::{Display, Debug};
  
    #[derive(Debug)]
    pub struct Billy {
      name: String,
      pub times_to_print: u8,
    }
  
    impl Billy {
      pub fn new(times_to_print: u8) -> Self {
        Self {
          name: "Billy".to_string(),
          times_to_print,
        }
      }

      pub fn print_billy(&self){
        for _ in 0..self.times_to_print {
          println!("{:?}", self.name)
        }
      }
    }

    pub fn prints_one_thing<T: Display>(input: T){
      println!("{}", input)
    }

  }

  use print_things::*;

  let mb = Billy::new(3);
  mb.print_billy();
}

