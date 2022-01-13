// use std::sync::mpsc::{channel, Sender, Receiver};
use std::sync::mpsc::{channel};

pub fn check(_: String) {
  // let (sender, receiver): (Sender<i32>, Receiver<i32>) = channel();
  let (sender, receiver) = channel();

  sender.send(5).unwrap();
  
  println!("{}", receiver.recv().unwrap());

}

pub fn cloning (_: String) {
  let (sender, receiver) = channel();
  let sender_clone = sender.clone();

  let mut handlers = vec![];
  
  handlers.push(std::thread::spawn( move|| {
    for _ in 0..10 {
      sender.send("ping...").unwrap();
    }
  }));

  handlers.push(std::thread::spawn( move|| {
    for _ in 0..10 {
      sender_clone.send("pong...").unwrap();
    }
  }));
 
  #[allow(unused_must_use)]
  for handler in handlers {
    handler.join();

    println!("{:?}", receiver.recv().unwrap());
  }
}

pub fn huge_work(_: String){
  let (sender, receiver) = channel();
  let huge_v = vec![0; 1_000];
  let mut new_v = vec![];
  let mut handle_v = vec![];

  for i in 0..10 {

    let sender_clone = sender.clone();
    let mut work: Vec<u8> = Vec::with_capacity(huge_v.len() / 10);
    work.extend(&huge_v[i*100..(i+1)*100]);

    let handle = std::thread::spawn(move || {
      for number in work.iter_mut() {
        *number += 1;
      }
      sender_clone.send(work).unwrap();
    });
    
    handle_v.push(handle);

  }

  for handle in handle_v {
    handle.join().unwrap();
  }

  while let Ok(results) = receiver.try_recv() {
    new_v.push(results);
  }

  let new_v = new_v.into_iter().flatten().collect::<Vec<u8>>();

  println!("{:?}, {:?}, total length {}", 
    &new_v[0..10],
    &new_v[new_v.len() - 10..new_v.len()],
    new_v.len(),
  );

  for n in new_v {
    if n != 1 {
      panic!();
    }
  }
}