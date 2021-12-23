pub mod looping;
pub mod iterator;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "looping" => looping::what(arg),
    "nest" => looping::nest(arg),
    "range" => looping::rng(arg),
    "comb-v" => looping::comb_v(arg),
    "looping2" => iterator::looping(arg),
    _ => looping::what(arg),
  }
}

