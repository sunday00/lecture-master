extern crate datastructure;
use std::env;

fn env() -> String {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    format!("{}", arg)
}

fn main() {
    if env() == "vec" {
        use datastructure::vec;
        vec::m1::run();
    } else if env() == "vec2" {
        use datastructure::vec;
        vec::m1::run2();
    } else if env() == "vec3" {
        use datastructure::vec;
        vec::m1::run3();
    } else if env() == "vec4" {
        use datastructure::vec;
        vec::m1::run4();
    }
}
