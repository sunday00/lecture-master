pub mod arr;
pub mod vector;

pub fn run(module: String, arg: String) {
  if module == "length" {
    arr::length(arg);
  } else if module == "slice" {
    arr::slice(arg);
  } else if module == "vec" {
    vector::deal(arg);
  } else if module == "vec_slice" {
    vector::slice(arg);
  } else if module == "capacity" {
    vector::capacity(arg);
  } else if module == "capacity-small" {
    vector::capacity_small(arg);
  } else if module == "capacity-large" {
    vector::capacity_large(arg);
  } else if module == "capacity-type" {
    vector::capacity_type(arg);
  };
}