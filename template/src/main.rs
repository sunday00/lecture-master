extern crate testing;
use std::env;

fn env() -> String {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    format!("{}", arg)
}

fn main(){
    use testing::modules;
    if env() == "1" {
        modules::m1::run1();
    } else if env() == "2" {
        modules::m1::run2();
    } else if env() == "3" {
        modules::m1::run3();
    } else if env() == "4" {
        modules::m2::run4();
    } else if env() == "5" {
        modules::m2::run5();
    } else if env() == "6" {
        modules::m2::run6();
    } else if env() == "7" {
        modules::m3::run7();
    }
}