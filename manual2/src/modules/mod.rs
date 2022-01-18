pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "billy" => check::billy(arg),
    _ => check::check(arg),
  }
}


