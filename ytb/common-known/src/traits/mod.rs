pub mod implements;
pub mod game;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "impl" => implements::implement(arg),
    "make" => implements::making(arg),
    "game" => game::fightD(arg),
    _ => implements::implement(arg),
  }
}

