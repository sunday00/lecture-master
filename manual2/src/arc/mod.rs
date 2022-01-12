pub mod check;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "using" => check::using(arg),
    "make_v" => check::make_v(arg),
    "complex" => check::complex(arg),
    _ => check::check(arg),
  }
}


