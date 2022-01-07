pub mod check;
pub mod mutex;
pub mod rwlock;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "check" => check::check(arg),
    "refcell" => check::refcell(arg),
    "mutex-ex1" => mutex::ex1(arg),
    "mutex-ex2" => mutex::ex2(arg),
    "rw-wh" => rwlock::mean(arg),
    _ => check::check(arg),
  }
}


