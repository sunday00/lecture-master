use std::fmt::Display;

fn print_it<T>(input: T) 
  where T: Display + AsRef<str>{
    println!("{}", input)
}

pub fn ref_cast(_: String){
  print_it("Please print me");
  print_it("Please print me".to_string());
}
