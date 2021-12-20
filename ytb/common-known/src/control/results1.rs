pub fn result1 (_:String) {
  fn check_err() -> Result<&'static str, ()> {
    Ok("fine")
  }

  println!("{}", check_err().unwrap());
}

pub fn result2 (s:String) {
  fn get_even(i: u8) -> Result<(), ()> {
    if i % 2 == 0 {
      Ok(())
    } else {
      Err(())
    }
  }

  match get_even(s.parse().unwrap()).is_ok() {
    true => println!("ok. it's even"),
    false => println!("ERR. It's odd or float")
  }
}

pub fn is_five(s: String) {
  fn check_five(n: u8) -> Result<u8, &'static str>{
    match n {
      5 => Ok(n),
      _ => Err("To bad...")
    }
  }

  match s.parse::<u8>() {
    Ok(n) => match check_five(n) {
      Ok(m) => println!("{}", m),
      Err(m) => println!("{}", m)
    },
    Err(_) => println!("Err. Input could not be convert integer.")
  }
}

