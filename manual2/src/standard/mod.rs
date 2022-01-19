pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "arrr" => check::arrr(arg),
    "v" => check::vvv(arg),
    _ => check::arrr(arg),
  }
}


