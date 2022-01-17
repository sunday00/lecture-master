pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "ds" => check::default_struct(arg),
    _ => check::check(arg),
  }
}


