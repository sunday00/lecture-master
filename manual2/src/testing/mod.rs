pub mod check;
pub mod tdd;

pub fn run(){
  tdd::math("1-2");
}

#[test]
fn two_is_two() {
  assert_eq!(2, 2)
}

#[test]
fn it_returns_two() {
    assert_eq!(check::return_two(), 2)
}

#[cfg(test)]
mod tests {
  use super::tdd::math;

  #[test]
  fn one_plus_one_is_two() {
      assert_eq!(math("1+1"), 2)
  }
  
  #[test]
  fn one_minus_two_is_minus_one() {
      assert_eq!(math("1-2"), -1)
  }
  
  #[test]
  fn one_minus_minus_one_is_two() {
      assert_eq!(math("1--1"), 2)
  }

  #[test]
  #[should_panic]
  fn panic_when_char_not_right() {
      math("7+seven");
  }
}
