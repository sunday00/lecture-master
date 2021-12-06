pub mod console;

pub fn run(module: String, arg: String) {
  if module == "hi" {
    console::hi(arg);
  } else if module == "block-value" {
    console::block_value();
  }
}