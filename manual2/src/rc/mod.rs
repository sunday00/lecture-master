pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "citizen" => check::citizen(arg),
    _ => check::check(arg),
  }
}


