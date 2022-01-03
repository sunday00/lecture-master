use std::fmt;

#[allow(dead_code)]
struct Empty;

struct Train(&'static str, &'static str, &'static str);

struct MyTrain {
  train: Train
}

impl fmt::Display for MyTrain {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "{}", self.train)
  }
}

impl fmt::Display for Train {
  fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
    write!(f, "({}-{}-{})", self.0, self.1, self.2)
  }
}

pub fn basic (_:String) {
  let train = MyTrain{
    train: Train("Mugung", "KTX", "green-line")
  };

  println!("{}", train);
}

#[derive(Debug)]
struct Cola {
  name: &'static str,
  populate: u8,
  price: u16
}

// impl fmt::Display for Cola {
//   fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
//     write!(f, "({}-{}/100-${})", self.name, self.populate, self.price)
//   }
// }

pub fn like_es6 (_: String) {
  let name = "pepsi";
  let populate: u8 = 90;
  let price: u16 = 1_000;

  let pepsi = Cola{
    name, populate, price
  };

  println!("{:?}", pepsi)
}