use std::thread;

pub fn run () {
  let v = vec![1, 2, 3];

  let handle = thread::spawn(move |  | {
    println!("vector: {:?}", v);
    drop(v);
  });

  handle.join().unwrap();
}
