extern crate concurrent;

use std::env;

fn env(i: u8) -> u8 {
    let args: Vec<String> = env::args().collect();
    if args.len() < i as usize + 1 {
        return 0;
    }

    let arg = &args[i as usize].clone();
    arg.parse::<u8>().unwrap()
}

pub fn main () {
    if env(1) == 1 {
        if env(2) == 0 || env(2) == 1 {
            concurrent::modules::m1::run();
        } else if env(2) == 2 {
            concurrent::modules::m1::run2();
        }
    }
}