pub fn run() {
  // panic!("crash and burn");

  let v = vec![1, 2, 3];

  print!("{:?}", v[4])
}

pub fn run2() {
  use std::fs::File;

  let f = File::open("hello.txt");
  
  let file = match f {
    // Ok(file) => file,
    Ok(file) => {
      println!("{:?}", file);
    },
    Err(error) => {
      // panic!("There was a problem opening the file: {:?}", error)
      println!("{:?}", error);
    },
  };
}

pub fn run3() {
  use std::fs::File;
  use std::io::ErrorKind;

  let f = File::open("hello.txt");
  
  let file = match f {
    Ok(file) => file,
    Err(ref err) if err.kind() == ErrorKind::NotFound => {
      match File::create("hello.txt") {
        Ok(fc) => fc,
        Err(ec) => {
          panic!("file crete failed : {:?}", ec)
        }
      }
    },
    Err(err) => {
      panic!("There was a problem opening the file: {:?}", err)
    },
  };
}

pub fn run4 () {
  use std::fs::File;

  // let f = File::open("hello2.txt").unwrap();
  let f = File::open("hello2.txt").expect("Where is my file?");
}

pub fn run5 () {
  println!("{:?}",read_username_from_file());
  println!("{:?}",read_username_from_file2());
  println!("{:?}",read_username_from_file3());
}

use std::io;
fn read_username_from_file() -> Result<String, io::Error> {
  use std::fs::File;
  use std::io::Read;
  let f = File::open("hello2.txt");

  let mut f = match f {
    Ok(file) => file,
    Err(e) => return Err(e),
  };

  let mut s = String::new();

  match f.read_to_string(&mut s) {
    Ok(_) => Ok(s),
    Err(e) => Err(e),
  }
}

fn read_username_from_file2() -> Result<String, io::Error> {
  use std::fs::File;
  use std::io::Read;

  let mut f = File::open("hello2.txt")?;
  let mut s = String::new();
  f.read_to_string(&mut s)?;
  Ok(s)
}

fn read_username_from_file3() -> Result<String, io::Error> {
  use std::fs::File;
  use std::io::Read;

  let mut s = String::new();

  File::open("hello2.txt")?.read_to_string(&mut s)?;

  Ok(s)
}

pub struct Guess {
  value: u8
}

impl Guess {
  pub fn new(value: u8) -> Guess {
    if value < 1 || value > 100 {
      panic!("Guess value must be between 1 and 100, got {}.", value);
    }

    Guess {
      value
    }
  }

  pub fn value(&self) -> u8 {
    self.value
  }
}

pub fn run6 () {
  use std::io;
  use std::cmp::Ordering;
  use rand::Rng;

  println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..101);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u8 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        let guess_ins = Guess::new(guess);

        match guess_ins.value().cmp(&secret_number) {
            Ordering::Less    => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal   => {
                println!("You win!");
                break;
            }
        }
    }
}