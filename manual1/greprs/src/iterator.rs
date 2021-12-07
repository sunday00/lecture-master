#[derive(PartialEq, Debug)]
struct Shoe {
  size: u32,
  style: String
}

fn shoes_in_my_size(shoes: Vec<Shoe>, shoe_size: u32) -> Vec<Shoe> {
  shoes.into_iter().filter( |s| s.size == shoe_size ).collect()
}

pub fn main (_args: Vec<String>) {
  let shoes = vec![
    Shoe { size: 10, style: String::from("sneaker") },
    Shoe { size: 13, style: String::from("sandal") },
    Shoe { size: 10, style: String::from("boot") },
  ];

  let in_my_size = shoes_in_my_size(shoes, 10);

  println!("{:?}", in_my_size);
}

struct Counter {
  count: u8
}

impl Counter {
  fn new() -> Counter {
    Counter {
      count: 0
    }
  }


}

impl Iterator for Counter {
  type Item = u8;

  fn next(&mut self) -> Option<Self::Item> {
    self.count += 1;
    if self.count < 6 {
      Some(self.count)
    } else {
      None
    }
  }
}

pub fn main2 (_args: Vec<String>) {
  let mut counter = Counter::new();
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
  println!("{:?}", counter.next());
}

#[cfg(test)]
#[allow(unused_imports)]
mod test {
  use super::*;

  #[test]
  fn iterator_chaining () {
    let sum: u8 = Counter::new().zip(Counter::new().skip(1))
                    .map(|(a, b)| a * b)
                    .filter(|x| x % 3 == 0)
                    .sum();
    assert_eq!(18, sum);
  }
}