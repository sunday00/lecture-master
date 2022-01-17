pub mod check;
pub mod with_trait;
pub mod err;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "bot"   => with_trait::bot(arg),
    "err"   => err::err(arg),
    _ => check::check(arg),
  }
}


