pub mod mean;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "mean" => mean::mean(arg),
    _ => mean::mean(arg),
  }
}


