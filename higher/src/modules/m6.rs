use std::fmt;

pub fn run() {
  trait OutlinePrint: fmt::Display {
    fn outline_print(&self) {
      let output = self.to_string();
      let len = output.len();

      println!("{}", "*".repeat(len + 4));
      println!("* {} *", " ".repeat(len));
      println!("* {} *", output);
      println!("* {} *", " ".repeat(len));
      println!("{}", "*".repeat(len + 4));
    }
  }

  struct Point {
    x: u8,
    y: u8
  }

  impl fmt::Display for Point {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
      write!(f, "({}, {})", self.x, self.y)
    }
  }

  impl OutlinePrint for Point {}

  let point = Point{x:3, y:6};
  point.outline_print()
}

pub fn run2() {
  /*
  impl fmt::Display for Vec<String> {

  } 
  */ // Display and Vec both of them are external. So it's impossible.


  struct Wrapper(Vec<String>);

  impl fmt::Display for Wrapper {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
      write!(f, "[{}]", self.0.join(", "))
    }
  }

  let w = Wrapper(vec![String::from("tiger"), String::from("smoke")]);

  println!("{}", w);
}

pub fn run3() {
  type Kilometer = i32;

  let k: i32 = 5;
  let y: Kilometer = 6;

  println!("{}", k + y);
  /*
  let sendBox: Box<Fn() + Send + 'static> = Box::new(|| println!("hi"));

  fn takes_long_type(f: Box<Fn() + Send + 'static>){

  }

  fn returns_long_type() -> Box<Fn() + Send + 'static>{
    return Box::new( || println!("Ho") )
  }
  */
  type Thunk = Box<dyn Fn() + Send + 'static>;
  let sendBox: Thunk = Box::new(|| println!("hi"));

  fn takes_long_type(f: Thunk){

  }

  fn returns_long_type() -> Thunk{
    return Box::new( || println!("Ho") )
  }
}

pub fn run4() {
  // use std::io::Error;
  use std::io::*;
  
  pub trait Write {
    /*
    fn write(&mut self, buf: &[u8]) -> Result<usize, Error>;
    fn flush(&mut self) -> Result<(), Error>;

    fn write_all(&mut self, buf: &[u8]) -> Result<(), Error>;
    fn write_fmt(&mut self, fnt: fmt::Arguments) -> Result<(), Error>;
    */
    fn write(&mut self, buf: &[u8]) -> Result<usize>;
    fn flush(&mut self) -> Result<()>;

    fn write_all(&mut self, buf: &[u8]) -> Result<()>;
    fn write_fmt(&mut self, fnt: fmt::Arguments) -> Result<()>;
  }
}

pub fn run5() {
  use std::io;
  use std::cmp::Ordering;
  use rand::Rng;

  // fn bar() -> ! {
  //   println!()
  // }

  let secret_number = rand::thread_rng().gen_range(1, 101);
  
  loop {
    println!("Please input your guess.");

    let mut guess = String::new();

    io::stdin().read_line(&mut guess)
        .expect("Failed to read line");

    let guess: u32 = match guess.trim().parse() {
        Ok(num) => num,
        Err(_) => continue,
    };

    println!("You guessed: {}", guess);

    match guess.cmp(&secret_number) {
        Ordering::Less    => println!("Too small!"),
        Ordering::Greater => println!("Too big!"),
        Ordering::Equal   => {
            println!("You win!");
            break;
        }
    }
  }

  fn generic<T: ?Sized>(t: &T){
    
  }
}