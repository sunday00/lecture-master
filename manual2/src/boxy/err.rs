use std::error::Error;
use std::fmt;

pub fn err(_:String){
  #[derive(Debug)]
  struct ErrorOne;

  impl Error for ErrorOne {}

  impl fmt::Display for ErrorOne {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
      write!(f, "You got the first error")
    }
  }

  #[derive(Debug)]
  struct ErrorTwo;

  impl Error for ErrorTwo {}

  impl fmt::Display for ErrorTwo {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
      write!(f, "You got the second error")
    }
  }

  fn returns_errors(input: u8) -> Result<String, Box<dyn Error>> {
    match input {
      0 => Err(Box::new(ErrorOne)),
      1 => Err(Box::new(ErrorTwo)),
      _ => Ok("Looks fine to me".to_string()),
    }
  }

  let v: Vec<u8> = vec![0, 1, 80];

  for n in v {
    match returns_errors(n) {
      Ok(i) => println!("{}", i),
      Err(m) => println!("{}", m),
    }
  }
}