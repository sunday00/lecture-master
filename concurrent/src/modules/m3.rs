use std::thread;
use std::sync::mpsc;

pub fn run(){
  let (tx, rx) = mpsc::channel();

  thread::spawn(move | |  {
    let val = String::from("hi");
    tx.send(val).unwrap();
  });

  let received = rx.recv().unwrap();
  println!{"GOT: {}", received}
}

pub fn run2(){
  let (tx, rx) = mpsc::channel();

  thread::spawn(move | |  {
    let val = String::from("hi");
    tx.send(val).unwrap();
  });

  loop {
    let mut ok_condition = false;
    let msg = match rx.try_recv() {
      Ok(msg) => { ok_condition = true; msg },
      Err(mpsc::TryRecvError::Empty) => String::from("loading"),
      Err(mpsc::TryRecvError::Disconnected) => panic!("Sender disconnected"),
    };
    println!("{:?}" , msg);
    
    // if !msg.eq("loading") { break }
    if ok_condition == true { break }
  }
}