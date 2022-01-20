pub mod check;
pub mod write;
pub mod make_f;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "write" => write::check(arg),
    "mul" => write::mul(arg),
    "make_f" => make_f::one(arg),
    _ => check::check(arg),
  }
}


