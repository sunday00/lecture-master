pub mod index;

pub fn run(module: String, arg: String) {
  if module == "size" {
    index::size(arg);
  } else if module == "conv" {
    index::conv(arg);
  }
} 
