pub mod index;
pub mod inference;
pub mod muta;
pub mod copy;

pub fn run(module: String, arg: String) {
  if module == "pri" {
    index::pri(arg);
  } else if module == "itoa" {
    index::itoa(arg);
  } else if module == "char-len" {
    index::char_len(arg);
  } else if module == "int" {
    inference::integer(arg);
  } else if module == "float" {
    inference::float(arg);
  } else if module == "mut" {
    muta::mutable_comp_type();
  } else if module == "copy" {
    copy::print_int();
  } else if module == "clone" {
    copy::clone();
  } else if module == "lasting" {
    copy::lasting();
  }
}