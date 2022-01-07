pub mod mean;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => mean::check(arg),
    _ => mean::check(arg),
  }
}


