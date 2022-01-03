pub mod structo;
pub mod implement;


pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "basic" => structo::basic(arg),
    "like_es6" => structo::like_es6(arg),
    "animal" => implement::animal(arg),
    _ => structo::basic(arg),
  }
}

