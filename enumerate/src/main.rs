use std::env;
mod sub1;
mod sub2;
mod sub3;
mod sub4;
mod sub5;
mod sub6;

fn env() -> u8 {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    arg.parse::<u8>().unwrap()
}

fn main() {
    if env() == 1 {
        sub1::run();
    } else if env() == 2 {
        sub2::run();
    } else if env() == 3 {
        sub3::run();
    } else if env() == 4 {
        sub4::run();
    } else if env() == 5 {
        sub5::run();
    } else if env() == 6 {
        sub6::run();
    }
}
