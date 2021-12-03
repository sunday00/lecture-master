extern crate exception;
use std::env;

fn env() -> String {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    format!("{}", arg)
}

fn main(){
  if env() == "1" {
    use exception::modules;
    modules::m1::run();
  } else if env() == "2" {
    use exception::modules;
    modules::m1::run2();
  } else if env() == "3" {
    use exception::modules;
    modules::m1::run3();
  } else if env() == "4" {
    use exception::modules;
    modules::m1::run4();
  } else if env() == "5" {
    use exception::modules;
    modules::m1::run5();
  } else if env() == "6" {
    use exception::modules;
    modules::m1::run6();
  }
}