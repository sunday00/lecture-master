pub fn check(_: String) {
  use std::fmt::Display;

  #[allow(dead_code)]
  fn prints<T>(i: T) -> ()
    where T: Display {
      println!("{}", i);
    }
    // T: Display does not means ADD Function Display to T
    // T: Display means do display when T has Display trait.
}
