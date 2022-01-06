pub mod basic;
pub mod complicated;
pub mod cycle;
pub mod pick;
pub mod relref;
pub mod func_type;

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
    "chr-find" => complicated::chr_find(arg),
    "calc-find" => complicated::calc_find(arg),
    "get-odd" => cycle::get_odd(arg),
    "use-fold-odd" => cycle::use_fold(arg),
    "divide-vector" => cycle::div_vec(arg),
    "peekable" => pick::peekable(arg),
    "loc" => pick::loc(arg),
    "borrow" => relref::borrow(arg),
    "func-type" => func_type::app(arg),
    _ => basic::lambda(arg),
  }
}


