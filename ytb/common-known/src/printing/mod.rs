pub mod console;

pub fn run(module: String, arg: String) {
  if module == "run" {
    console::run(arg);
  } 
}