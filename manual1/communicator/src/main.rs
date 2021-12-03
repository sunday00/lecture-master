extern crate communicator;

use std::env;
mod sub1;

fn env() -> u8 {
  let args: Vec<String> = env::args().collect();
  if args.len() > 1 {
    let arg = &args[1].clone();
    arg.parse::<u8>().unwrap()
  } else {
    0
  }
}

fn main() {
  communicator::client::connect();

  if env() == 2 {
    sub1::run();
  } else if env() == 22 {
    sub1::run2();
  } else if env() == 23 {
    sub1::run3();
  }
}
