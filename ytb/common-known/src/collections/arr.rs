#[allow(unused_assignments)]
#[allow(unused_variables)]
pub fn length (_: String) {
  let mut arr1: [&str; 2] = ["one", "two"];
  let arr2: [&str; 3] = ["one", "two", "three"];

  // arr1 = arr2 
  arr1 = ["Something"; 2];

  println!("{:?}", arr1);
}

use std::convert::TryInto;

pub fn slice (s: String) {
  let born: [u8; 10] = (1..11).collect::<Vec<u8>>().try_into().expect("");
  let indicator = s.split("-").map(|ss| ss.parse::<u8>().unwrap() as usize ).collect::<Vec<usize>>();
  println!("{:?}", born);

  let result = &born[indicator[0]..indicator[1]];

  println!("{:?}", result)
}