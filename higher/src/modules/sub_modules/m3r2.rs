pub trait Iterator <T> {
  fn next(&mut self) -> Option<T>;
}

pub struct Counter {
  pub count: u8,
  pub s : char
}

impl Iterator<u8> for Counter {
  fn next(&mut self) -> Option<u8>{
    self.count += 1;
    return Some(self.count);
  }
}

impl Iterator<char> for Counter {
  fn next(&mut self) -> Option<char>{
    Some('3')
  }
}

pub fn run () {
  let mut counter = Counter{ count: 0, s: 'c' };

  for _ in 1..10 {
    let ans: Option<char> = counter.next();
    println!("{:?}", ans);
  }
}
