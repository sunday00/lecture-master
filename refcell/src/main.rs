extern crate refcell;

pub fn main() {
  let x = 5;
  // let y = &mut x;
  let _y = &x;

  refcell::mods::m1::run1();
  refcell::mods::m2::run();
  refcell::circular::m1::run1();
  refcell::circular::m2::run1();
}
