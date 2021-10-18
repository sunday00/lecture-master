extern crate generic_trait_lifetime;
use std::env;

fn env() -> String {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    format!("{}", arg)
}

fn main(){
    use generic_trait_lifetime::modules;
    if env() == "1" {
        modules::m1::run1();
    } else if env() == "2" {
        modules::m1::run2();
    } else if env() == "3" {
        modules::m1::run3();
    } else if env() == "4" {
        modules::m2::run4();
    }
}