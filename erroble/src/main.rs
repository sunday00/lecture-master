extern crate erroble;
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
            erroble::modules::m1::run();
        } else if env(2) == 2 {
            erroble::modules::m1::run2();
        } else if env(2) == 3 {
            erroble::modules::m1::run3();
        }
    } else if env(1) == 2 {
        if env(2) == 0 || env(2) == 1 {
            erroble::modules::m2::run();
        } else if env(2) == 2 {
            erroble::modules::m2::run2();
        }
    } 
}