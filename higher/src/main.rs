extern crate higher;

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
            higher::modules::m1::run();
        } else if env(2) == 2 {
            higher::modules::m1::run2();
        } else if env(2) == 3 {
            higher::modules::m1::run3();
        } else if env(2) == 4 {
            higher::modules::m1::run4();
        } else if env(2) == 5 {
            higher::modules::m1::run5();
        } else if env(2) == 6 {
            higher::modules::m1::run6();
        } else if env(2) == 7 {
            higher::modules::m1::run7();
        }
    } else if env(1) == 2 {
        if env(2) == 0 || env(2) == 1 {
            higher::modules::m2::run();
        } else if env(2) == 2 {
            higher::modules::m2::run2();
        }
    } else if env(1) == 3 {
        if env(2) == 0 || env(2) == 1 {
            higher::modules::m3::run();
        } 
        else if env(2) == 2 {
            higher::modules::m3::run2();
        }
    } else if env(1) == 4 {
        if env(2) == 0 || env(2) == 1 {
            higher::modules::m4::run();
        } 
        else if env(2) == 2 {
            higher::modules::m4::run2();
        }
    } else if env(1) == 5 {
        if env(2) == 0 || env(2) == 1 {
            higher::modules::m5::run();
        } 
        else if env(2) == 2 {
            higher::modules::m5::run2();
        }
    } else if env(1) == 6 {
        if env(2) == 0 || env(2) == 1 {
            higher::modules::m6::run();
        } 
        else if env(2) == 2 {
            higher::modules::m6::run2();
        }
        else if env(2) == 3 {
            higher::modules::m6::run3();
        }
        else if env(2) == 4 {
            higher::modules::m6::run4();
        }
        else if env(2) == 5 {
            higher::modules::m6::run5();
        }
    } 
}