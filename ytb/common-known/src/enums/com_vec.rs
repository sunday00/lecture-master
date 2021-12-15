use strum::IntoEnumIterator;
use strum_macros::EnumIter;

pub fn to_num (s:String) {
  #[allow(dead_code)]
  #[derive(Debug, EnumIter)]
  // enum Season {
  //   Spring,
  //   Summer,
  //   Autumn,
  //   Winter
  // }  // default : 0 1 2 3
  enum Season {
    Spring = 11,
    Summer = 12,
    Autumn = 77,
    Winter = 4,
  }

  use Season::*;

  fn to_season(s: &str) -> Season {
    let mut result: Season = Spring;
    let mut is_matched: bool = false;
    let mut values: Vec<String> = Vec::new();

    for season in Season::iter() {
      let ss = format!("{:?}", &season);
      if &ss == s {
        is_matched = true;
        result = season
      }
      values.push(ss);
    }

    if !is_matched {
      panic!("this is not acceptable. choose among {}", format!("{:?}", values));
    }

    return result;
  }

  let now = to_season(&s);
  println!("{}", format!("{:?}", now));
  println!("{}", now as u8);
}

pub fn star_size(_:String) {
  #[derive(Debug, EnumIter)]
  enum Star {
    BrownDwarf = 10,
    RedDwarf = 50,
    YellowStar = 100,
    RedGiant = 1000,
    DeadStar, // number is plus one on last number
  }

  use Star::*;

  for star in Star::iter() {
    match star as u32 {
      size if size <= 80 => println!("small"),
      size if size > 80 && size < 500 => println!("big"),
      _ => println!("super"),
    }
  }

  println!("What about DeadStar? It's the number {}.", DeadStar as u32);
}

pub fn mt (s: String) {
  enum Number {
    U16(u16),
    I32(i32),
  }

  #[allow(non_snake_case)]
  fn to_Number(input: i32) -> Number {
    let number = match input.is_positive(){
      true => Number::U16(input as u16),
      false => Number::I32(input),
    };

    number
  }

  let v = to_Number(s.parse().unwrap());
  match v {
    Number::I32(n) => println!("{} is now ready. It can be minus!", n),
    Number::U16(n) => println!("{} is now ready. It can't be minus! Only plus", n),
  }
}