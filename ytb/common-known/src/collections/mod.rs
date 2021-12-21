pub mod arr;
pub mod vector;
pub mod tuple;
pub mod maps;
pub mod sets;
pub mod binheap;

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
    "noBtree" => maps::hm(arg),
    "btree" => maps::btree(arg),
    "k" => maps::k(arg),
    "lotto" => maps::lotto(arg),
    "library" => maps::library(arg),
    "vote" => maps::vote(arg),
    "filter-unique" => sets::filter_unique(arg),
    "reminder" => binheap::reminder(arg),
    _ => arr::length(arg),
  }
}