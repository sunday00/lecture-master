pub mod en;
pub mod com_vec;

pub fn run(module: String, arg: String) {
  let module: &str = &module.to_string();

  match module {
    "what" => en::what(arg),
    "v" => en::v(arg),
    "use" => en::using(arg),
    "to_num" => com_vec::to_num(arg),
    "star-size" => com_vec::star_size(arg),
    "multiple-type" => com_vec::mt(arg),
    _ => en::what(arg),
  }
}

