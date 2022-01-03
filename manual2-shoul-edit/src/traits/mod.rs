pub mod implements;
pub mod game;
pub mod bound;
pub mod from;
pub mod cast;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "impl" => implements::implement(arg),
    "make" => implements::making(arg),
    "game" => game::fightD(arg),
    "game2" => bound::game2(arg),
    "conv1" => from::conv1(arg),
    "conv2" => from::conv2(arg),
    "conv3" => from::conv3(arg),
    "cast" => cast::ref_cast(arg),
    _ => implements::implement(arg),
  }
}

