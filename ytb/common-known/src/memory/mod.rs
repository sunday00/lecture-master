pub mod stack;

pub fn run(module: String, arg: String) {
  if module == "run" {
    stack::run(arg);
  } 
}