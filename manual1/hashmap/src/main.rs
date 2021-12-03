extern crate hashmap;
use std::env;

fn env() -> String {
    let args: Vec<String> = env::args().collect();
    let arg = &args[1].clone();
    format!("{}", arg)
}

fn main(){
  if env() == "1" {
    use hashmap::hashmap_lib;
    hashmap_lib::m1::run1();
  } else if env() == "2" {
    use hashmap::hashmap_lib;
    hashmap_lib::m1::run2();
  } else if env() == "3" {
    use hashmap::hashmap_lib;
    hashmap_lib::m1::run3();
  } 
}