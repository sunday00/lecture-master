pub fn add_two(a: u8) -> u8 {
  internal_adder(a, 2)
}

fn internal_adder(a: u8, b: u8) -> u8 {
  a + b
}