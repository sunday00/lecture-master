use std::mem::size_of;
use std::mem::size_of_val;

pub fn size (_: String) {
  println!("{}", size_of::<String>());
  println!("{}", size_of::<u8>());
  println!("{}", size_of_val("김경호"));
  println!("{}", size_of_val("Adrian Fahrenheit Țepeș"));

  let s = String::from("
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
    hello master perppet feels smells like teens and then you I sleep all the days,
  ");
  println!("{} : size {}", s, s.chars().count())

  // String size 24bytes means, not maximum length 24bytes. 
  // Rear String contents is on HEAP!
  // Type String always refs Heap, on STACK!
  // '24bytes' means referencing address length is 24bytes, 
  // real data has no limit (up to allowing hardware)
}

pub fn conv (s: String) {
  
  let my_string1: String = "Try to make this a String".into();
  let my_string2: &str = &s;

  println!("{}, {}", my_string1, my_string2);
}
