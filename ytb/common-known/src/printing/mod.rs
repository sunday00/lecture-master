pub mod console;
pub mod more;

pub fn run(module: String, arg: String) {
  if module == "hi" {
    console::hi(arg);
  } else if module == "block-value" {
    console::block_value();
  } else if module == "debug" {
    console::debug();
  } else if module == "escape" {
    more::escape();
  } else if module == "varvar" {
    more::varvar();
  } else if module == "byte" {
    more::byte();
  } else if module == "hex" {
    more::hex(arg);
  }
} 
