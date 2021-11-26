pub trait Iterator {
  type Item;
  fn next(&mut self) -> Option<Self::Item>;
}

pub struct Counter {
  pub count: u8
}

impl Iterator for Counter {
  type Item = u8;

  fn next(&mut self) -> Option<Self::Item>{
    self.count += 1;
    return Some(self.count);
  }
}

