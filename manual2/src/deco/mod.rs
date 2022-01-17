pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "basic" => check::basic(arg),
    "hold-number" => check::hold_number(arg),
    "game" => check::game(arg),
    _ => check::check(arg),
  }
}


