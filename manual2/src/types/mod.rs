pub mod alias;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "alias" => alias::mean(arg),
    _ => alias::mean(arg),
  }
}
