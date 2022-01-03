pub mod func;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "func" => func::func(arg),
    _ => func::func(arg),
  }
}


