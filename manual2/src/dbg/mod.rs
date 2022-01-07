pub mod check;
pub mod inspect;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "vec-dbg" => check::veg_dbg(arg),
    "inspect-v" => inspect::inspect_v(arg),
    "referf" => inspect::referf(arg),
    _ => check::check(arg),
  }
}


