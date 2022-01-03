pub mod p1;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "f" => p1::f(arg),
    "f2" => p1::f2(arg),
    "inner-debug" => p1::inner_debug(arg),
    "with-struct" => p1::with_struct(arg),
    "partial-ord" => p1::partial_ord(arg),
    "partial-ord2" => p1::partial_ord2(arg),
    _ => p1::f(arg),
  }
}

