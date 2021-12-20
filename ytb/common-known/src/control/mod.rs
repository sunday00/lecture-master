pub mod flow;
pub mod op1;
pub mod op2;
pub mod results1;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "if" => flow::maybe(arg),
    "define" => flow::define(arg),
    "mul" => flow::mul(arg),
    "mul2" => flow::mul2(arg),
    "match_then_as" => flow::match_then_as(arg),
    "option1" => op1::option1(arg),
    "option2" => op1::option2(arg),
    "option3" => op2::option3(arg),
    "complex" => op2::complex(arg),
    "wether" => op2::wether(arg),
    "result1" => results1::result1(arg),
    "result2" => results1::result2(arg),
    "is_five" => results1::is_five(arg),
    
    _ => flow::maybe(arg),
  }
}

