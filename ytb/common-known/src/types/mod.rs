pub mod index;

pub fn run(module: String, arg: String) {
  if module == "pri" {
    index::pri(arg);
  } else if module == "itoa" {
    index::itoa(arg);
  } else if module == "char-len" {
    index::char_len(arg);
  }
}