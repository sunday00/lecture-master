extern crate strings_crash;
use std::env;

fn env() -> String {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    format!("{}", arg)
}

fn main(){
  if env() == "1" {
    use strings_crash::strings_lib;
    strings_lib::m1::run();
  } else if env() == "2" {
    use strings_crash::strings_lib;
    strings_lib::m1::run2();
  } else if env() == "3" {
    use strings_crash::strings_lib;
    strings_lib::m1::run3();
  }
}