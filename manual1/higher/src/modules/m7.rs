pub fn run(){
  fn add_one(x: u8) -> u8 {
    x + 1
  }

  fn do_twice(f: fn(u8) -> u8, arg: u8) -> u8 {
    f(arg) + f(arg)
  }

  let answer = do_twice(add_one, 5);
  println!("{}", answer)
}

pub fn run2(){
  let list_of_numbers = vec![1,2,3];
  let list_of_strings: Vec<String> = list_of_numbers
    .iter().map(|i| i.to_string())
    .collect();

    println!("{:?}", list_of_strings);

  let list_of_numbers = vec![1,2,3];
  let list_of_strings: Vec<String> = list_of_numbers
    .iter().map(ToString::to_string)
    .collect();

  println!("{:?}", list_of_strings);
}

pub fn run3(){
  fn returns_closure() -> Box<Fn(u8) -> u8> {
    Box::new(|x| x + 1)
  }

  println!("{}", returns_closure()(3));
}