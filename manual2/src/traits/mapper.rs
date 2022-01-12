pub fn function_return(_: String) {
  fn returns_a_closure(input: &str) 
    -> impl FnMut(i32) -> i32 {
      match input {
        "double" => | mut number | {
          number *= 2;
          println!("Double: {}", number);
          number
        },"triple" => | mut number | {
          number *= 3;
          println!("Triple: {}", number);
          number
        }, _ => | | {
          println!("Not support: {}", input);
          number
        }
      }
  }
    
  my_number = 10;
  let mut double = returns_a_closure("double");
  let mut triple = returns_a_closure("triple");
  let mut quadruple = returns_a_closure("quadruple");

  double(my_number);
  triple(my_number);
  quadruple(my_number);
}