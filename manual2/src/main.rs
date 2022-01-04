extern crate common_known;

use common_known::*;
use std::env;

fn env(i: u8) -> String {
    let args: Vec<String> = env::args().collect();
    if args.len() < i as usize + 1 {
        return String::new();
    }

    String::from(args[i as usize].clone())
}

fn main() {
    let main:&str = &env(1).to_string();
    match main {
    "looping" => closures::run(env(2), env(3)),
    _ => closures::run(env(2), env(3)),
  }
}
