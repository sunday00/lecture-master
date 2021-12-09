pub mod mut_args;

pub fn run(module: String, arg: String) {
  if module == "co" {
    mut_args::chg_original_mode(arg);
  } else if module == "ko" {
    mut_args::keep_original_mode(arg);
  }
}