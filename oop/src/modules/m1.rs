use super::util::*;

pub fn run () {
  let mut a = AveragedCollection::new();
  
  a.add(1);
  a.add(3);
  a.add(7);
  a.add(11);
  a.add(21);
  a.add(31);
  a.add(34);

  println!("{}", a.average())
}