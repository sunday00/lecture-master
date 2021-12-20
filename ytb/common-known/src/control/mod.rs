pub mod flow;
pub mod op_n_re;
pub mod op_n_re2;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "if" => flow::maybe(arg),
    "define" => flow::define(arg),
    "mul" => flow::mul(arg),
    "mul2" => flow::mul2(arg),
    "match_then_as" => flow::match_then_as(arg),
    "option1" => op_n_re::option1(arg),
    "option2" => op_n_re::option2(arg),
    "result1" => op_n_re2::result1(arg),
    
    _ => flow::maybe(arg),
  }
}

