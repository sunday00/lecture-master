pub mod arr;
pub mod vector;
pub mod tuple;
pub mod hm;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();
  match module {
    "length" => arr::length(arg),
    "slice" => arr::slice(arg),
    "vec" => vector::deal(arg),
    "vec-slice" => vector::slice(arg),
    "capacity" => vector::capacity(arg),
    "capacity-small" => vector::capacity_small(arg),
    "capacity-large" =>  vector::capacity_large(arg),
    "capacity-type" => vector::capacity_type(arg),
    "spread" => tuple::spread(arg),
    "noBtree" => hm::hm(arg),
    "btree" => hm::btree(arg),
    "k" => hm::k(arg),
    "lotto" => hm::lotto(arg),
    "library" => hm::library(arg),
    _ => arr::length(arg),
  }
}