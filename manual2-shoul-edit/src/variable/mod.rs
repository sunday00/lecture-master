pub mod mutable;

pub fn run(module: String, arg: String) {
  if module == "mut_ref" {
    mutable::mut_ref(arg);
  } else if module == "borrow" {
    mutable::borrow(arg);
  } else if module == "shadow" {
    mutable::shadow(arg);
  } 
} 
