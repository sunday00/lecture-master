use std::borrow::Cow;

pub fn mean(_: String) {
  fn modulo_3(i: u8) -> Cow<'static, str> {
    match i % 3 {
      0 => "remainder is 0".into(),
      1 => "remainder is 1".into(),
      r => format!("remainder is {}", r).into(),
    }
  }

  for n in 1..=6 {
    match modulo_3(n) {
      Cow::Borrowed(m) => println!("{} borrowed {}", n, m),
      Cow::Owned(m) => println!("{} owned {}", n, m),
    }
  }
}
