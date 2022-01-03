pub mod mut_args;
pub mod chaining;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "co" => mut_args::chg_original_mode(arg),
    "ko" => mut_args::keep_original_mode(arg),
    "vv" => chaining::make_v(arg),
    "ch" => chaining::chain(arg),
    _ => mut_args::keep_original_mode(arg),
  }
}