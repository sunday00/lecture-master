pub mod check;
pub mod ext;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "billy" => check::billy(arg),
    "rand-do" => ext::rand_do(arg),
    "etc" => ext::etc(arg),
    _ => check::check(arg),
  }
}


