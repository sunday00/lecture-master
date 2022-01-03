pub mod stack;
pub mod refs;

pub fn run(module: String, arg: String) {
  if module == "run" {
    stack::run(arg);
  } else if module == "refs" {
    refs::run(arg);
  } else if module == "addr" {
    refs::addr();
  } 
}