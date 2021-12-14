pub mod flow;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "if" => flow::maybe(arg),
    "define" => flow::define(arg),
    "mul" => flow::mul(arg),
    "mul2" => flow::mul2(arg),
    "match_then_as" => flow::match_then_as(arg),
    _ => flow::maybe(arg),
  }
}

