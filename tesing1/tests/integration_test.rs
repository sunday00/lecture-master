extern crate tesing1;

mod common;

use tesing1::rec;

#[test]
fn it_adds_two_integration() {
  common::setup();
  assert_eq!(4, rec::add_two(2));
}