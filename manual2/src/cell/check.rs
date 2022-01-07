pub fn check(_: String) {
  use std::cell::Cell;

  #[allow(dead_code)]
  struct PhoneModel {
    company: String,
    model: String,
    size: f32,
    memory: usize,
    date: u32,
    is_sale: Cell<bool>,
  }

  let iph = PhoneModel {
    company: "Apple".to_string(),
    model: "iphXS pro".to_string(),
    size: 7.5,
    memory: 4_000_000,
    date: 2019,
    is_sale: Cell::new(true),
  };

  iph.is_sale.set(false);
}

pub fn refcell(_: String) {
  use std::cell::RefCell;

  #[derive(Debug)]
  #[allow(dead_code)]
  struct User{
    id: u8,
    year: u32,
    username: String,
    active: RefCell<bool>,
  }

  let user = User {
    id: 1,
    year: 2021,
    username: "Clack Kent".to_string(),
    active: RefCell::new(true),
  };

  println!("{:?}", user.active);

  user.active.replace(false);
  println!("{:?}", user.active);

  user.active.replace_with(|_| if user.year < 2000 { true } else { false });
  println!("{:?}", user.active);

  println!("{}", user.active.borrow_mut());
  println!("{}", user.active.borrow_mut());
  let ba = user.active.borrow_mut();
  // let ca = user.active.borrow_mut(); 
  // println!("{},{}", ba, ca);
  println!("{}", ba); // cant borrow multiple times
}


