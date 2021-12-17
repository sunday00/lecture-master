pub mod me;

pub fn run (module: String, arg: String){
  let module: &str = &module.to_string();

  match module {
    "me" => me::comp(arg),
    "comp" => me::comp(arg),
    "aut" => me::aut(arg),
    _ => me::comp(arg),
  }
}