use std::num::ParseIntError;

pub fn parse(_: String) {
  fn parse_str(input: &str) -> Result<i32, ParseIntError> {
    let n = input.parse::<i32>()?;
    Ok(n)
  }

  let str_vec = vec!["Seven", "8", "9.0", "nice", "6060"];
  for item in str_vec {
    let parsed = parse_str(item);
    println!("{:?}", parsed);
  }
}

pub fn optional_chaining(_: String){
  fn parse_str(input: &str) -> Result<i32, ParseIntError> {
    let n = input.parse::<u16>()?
      .to_string().parse::<u32>()?
      .to_string().parse::<i32>()?;
    Ok(n)
  }

  let str_vec = vec!["Seven", "8", "9.0", "nice", "6060"];
  for item in str_vec {
    let parsed = parse_str(item);
    println!("{:?}", parsed);
  }
}

pub fn pan(_: String) {
  let v = vec![8,9,10];

  let fourth = v.get(3).unwrap_or(&0);

  println!("{}", fourth);
}
