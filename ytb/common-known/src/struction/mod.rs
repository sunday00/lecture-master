pub mod structo;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "basic" => structo::basic(arg),
    "like_es6" => structo::like_es6(arg),
    _ => structo::basic(arg),
  }
}

