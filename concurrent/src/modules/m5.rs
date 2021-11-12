use std::sync::mpsc;
use std::thread;
use std::time::Duration;

pub fn run () {
  let (tx, rx) = mpsc::channel();

  let tx1 = mpsc::Sender::clone(&tx);

  thread::spawn(move || {
    let vals = vec![
      String::from("apple"),
      String::from("banana"),
      String::from("cherry"),
      String::from("durian"),
      String::from("egg"),
    ];

    for val in vals {
      tx1.send(val).unwrap();
      thread::sleep(Duration::from_secs(1))
    }
  });

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
      thread::sleep(Duration::from_secs(1))
    }
  });

  for received in rx {
    println!("Got: {}", received);
  }

}