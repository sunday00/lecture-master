use std::sync::RwLock;
use std::mem::drop;

pub fn mean(_: String) {
  let r = RwLock::new(5);

  let read1 = r.read().unwrap();
  let read2 = r.read().unwrap();

  println!("{:?}, {:?}", read1, read2);

  drop(read1);
  drop(read2);

  let mut w = r.write().unwrap();
  *w = 6;
  drop(w);

  println!("{:?}", r);

  let r = RwLock::new(5);
  let _read1 = r.read().unwrap();

  if let Ok(mut number) = r.try_write() {
    *number += 10;
    println!("{}", number)
  } else {
    println!("{}" , "no returlt")
  };
}


