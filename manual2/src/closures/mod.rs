pub mod basic;
pub mod complicated;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "lambda" => basic::lambda(arg),
    "use-outside" => basic::use_outside(arg),
    "use-unwrap" => basic::use_unwrap(arg),
    "use-map" => basic::use_map(arg),
    "make-hash-map" => complicated::make_hash_map(arg),
    "divide-ns" => complicated::divide_ns(arg),
    "filter" => complicated::filter(arg),
    "ceos" => complicated::ceos(arg),
    "parserble" => complicated::parserble(arg),
    "andthen" => complicated::andthen(arg),
    _ => basic::lambda(arg),
  }
}


