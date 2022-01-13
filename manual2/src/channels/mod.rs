pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "clone" => check::cloning(arg),
    "huge_work" => check::huge_work(arg),
    _ => check::check(arg),
  }
}


