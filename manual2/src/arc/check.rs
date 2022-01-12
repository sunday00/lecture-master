use std::sync::{Arc, Mutex};

pub fn check(_: String) {
  let handle1 = std::thread::spawn(|| {
    for _ in 0..5 {
      println!("now 1 working")
    }
  });

  let handle2 = std::thread::spawn(|| {
    for _ in 0..5 {
      println!("now 2 working")
    }
  });

  handle1.join().unwrap();
  handle2.join().unwrap();

  println!("End")
}

pub fn using(_: String) {
  let my_number = Arc::new(Mutex::new(0));
  
  let my_numbe1 = Arc::clone(&my_number);
  let my_numbe2 = Arc::clone(&my_number);

  let thread1 = std::thread::spawn(move || {
    for _ in 0..10 {
      *my_numbe1.lock().unwrap() += 1;
    }
  });

  let thread2 = std::thread::spawn(move || {
    for _ in 0..10 {
      *my_numbe2.lock().unwrap() += 1;
    }
  });

  thread1.join().unwrap();
  thread2.join().unwrap();

  println!("finally value: {:?}", my_number);
}

pub fn make_v(_: String) {
  let my_number = Arc::new(Mutex::new(0));

  let mut handle_vec = vec![];

  for _ in 0..2 {
    let my_number_clone = Arc::clone(&my_number);
    let handle = std::thread::spawn(move || {
      for _ in 0..10 {
        *my_number_clone.lock().unwrap() += 1;
      }
    });
    handle_vec.push(handle);
  }

  handle_vec.into_iter().for_each(| handle | handle.join().unwrap());

  println!("{:?}", my_number);
}

pub fn complex(_: String) {
  use std::thread::spawn; 

  fn make_arc(number: i32) -> Arc<Mutex<i32>> {
    Arc::new(Mutex::new(number))
  }

  fn make_clone(input: &Arc<Mutex<i32>>) -> Arc<Mutex<i32>> {
    Arc::clone(&input)
  }

  let mut handle_vec = vec![];
  let my_number = make_arc(0);

  for _ in 0..2 {
    let my_number_clone = make_clone(&my_number);
    let handle = spawn(move || {
      for _ in 0..10 {
        let mut value_inside = my_number_clone.lock().unwrap();
        *value_inside += 1;
      }
    });

    handle_vec.push(handle);
  }

  handle_vec.into_iter().for_each(| handle | {
    handle.join().unwrap();
  });

  println!("{:?}", my_number);

}
