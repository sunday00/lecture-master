pub mod check;
pub mod write;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "write" => write::check(arg),
    "mul" => write::mul(arg),
    _ => check::check(arg),
  }
}


