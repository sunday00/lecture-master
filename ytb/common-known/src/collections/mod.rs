pub mod arr;

pub fn run(module: String, arg: String) {
  if module == "length" {
    arr::length(arg);
  } else if module == "slice" {
    arr::slice(arg);
  } ;
}