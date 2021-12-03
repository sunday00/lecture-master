pub fn run1(){
  let x = 5;
  let y = &x;

  println!("{}", *y);

  assert_eq!(5, x);
  assert_eq!(5, *y);
}

fn hello(name: &str) {
  println!("Hello, {}!", name);
}

pub fn run2 () {
  let m = MyBox::new(String::from("Rust"));
  hello(&m);
}

struct MyBox<T>(T);

impl<T> MyBox<T> {
  fn new(x: T) -> MyBox<T> {
    MyBox(x)
  }
}

use std::ops::Deref;

impl<T> Deref for MyBox<T> {
  type Target = T;
  fn deref(&self) -> &T {
    &self.0
  }
}

#[cfg(test)]
mod tests {

  use super::MyBox;

  #[test]
  fn reverse_test() {
      let x = 5;
      let y = Box::new(x);

      assert_eq!(5, *y)
  }

  #[test]
  fn custom_box_reverse(){
    let x = 5;
    let y = MyBox::new(x);

    assert_eq!(5, *y)
  }
}