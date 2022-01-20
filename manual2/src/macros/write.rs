pub fn check (_: String) {
  macro_rules! get6 {
    ($v:expr) => {
      $v
    };
    () => {
      "this is not a six"
    }
  }

  println!("{}", get6!(6));
  println!("{}", get6!(4));
  println!("{}", get6!(1));
  println!("{}", get6!("345"));
  println!("{}", get6!());
}

pub fn tt (_: String) {
  macro_rules! pp {
    ($i: tt) => {
      println!("{}", stringify!($i));
    };
  }

  pp!(456asdqwe);
}

pub fn mul (_: String) {
  macro_rules! pp {
    ($($i: tt), *) => {
      println!("{}", stringify!($($i), *));
    };
  }

  pp!(456asdqwe, ebiufewb, fjnwio);
}
