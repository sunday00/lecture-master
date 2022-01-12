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
    "test" => test::run(env(2), env(3)),
    "dbg" => dbg::run(env(2), env(3)),
    "life" => life::run(env(2), env(3)),
    "generics" => generics::run(env(2), env(3)),
    "cell" => cell::run(env(2), env(3)),
    "cow" => cow::run(env(2), env(3)),
    "types" => types::run(env(2), env(3)),
    "macro" => macros::run(env(2), env(3)),
    "rc" => rc::run(env(2), env(3)),
    "arc" => arc::run(env(2), env(3)),
    "threads" => threads::run(env(2), env(3)),
    "closures2" => closures2::run(env(2), env(3)),
    "traits" => traits::run(env(2), env(3)),
    _ => closures::run(env(2), env(3)),
  }
}
