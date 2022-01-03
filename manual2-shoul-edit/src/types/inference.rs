fn print_type_of<T>(_: &T) -> &'static str {
  std::any::type_name::<T>()
}

pub fn integer (arg: String) {
  // let small_number: u8 = String::from(arg).to_string().parse().unwrap();
  let small_number = String::from(arg).to_string().parse::<u8>().unwrap();
  
  // let small_number: u8 = 10;
  // let small_number = 10u8;
  let small_number2 = 10_u8;
  // let big_number: u32 = 100_000_000;
  let big_number = 100_000_000_u32;
  
  let big_number2: u32 = 92__7_____3;

  println!("{},{},{},{}", small_number, small_number2, big_number, big_number2)
}

pub fn float (_arg: String) {
  let small_float: f64 = 8.;

  let small_float2: f32 = 7.;

  println!("{}, {}", print_type_of(&small_float), print_type_of(&small_float2));

  // let sum = small_float + small_float2;
  let sum = small_float as f32 + small_float2;


  println!("{},", sum)
}