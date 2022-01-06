pub fn borrow (_: String) {
  use std::mem;

  let color = String::from("green");

  let print = | | println!("color: {}", color);

  print();

  let _r = &color;

  print();

  let _move = color;

  // print(); Nope! 

  let mut count = 0;

  let mut inc = | | {
    count +=1;
    println!("{}", count);
  };

  inc();
  inc();
  // let _reborrow = &count; 
  inc();
  inc();
  
  let _count = &mut count;

  let movable = Box::new(3);

  let consume = || {
    println!("`movable`: {:?}", movable);
    // mem::drop(movable);
  };

  consume();
  consume();
  consume();
  mem::drop(movable);
}

