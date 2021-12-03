use std::thread;
use std::sync::mpsc;
use std::time::Duration;

pub fn run() {
  let (tx, rx) = mpsc::channel();

  thread::spawn(move || {
    let val = String::from("hi");
    tx.send(val).unwrap();
    // println!("val is {}", val);
  });

  let received = rx.recv().unwrap();
  println!("Got: {}", received);
}

pub fn run2 () {
  let (tx, rx) = mpsc::channel();

  thread::spawn(move || {
    let vals = vec![
      String::from("1"),
      String::from("2"),
      String::from("3"),
      String::from("4"),
      String::from("5"),
    ];

    for val in vals {
      tx.send(val).unwrap();
      thread::sleep(Duration::from_secs(1));
    }
  });

  for received in rx {
    println!("Got: {}", received);
  }
}
