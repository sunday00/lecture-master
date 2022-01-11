pub fn check(_: String) {
  for i in 0..19 {
    let handle = std::thread::spawn(move || {
      println!("do something {}", i);
    });

    handle.join().expect("Not joinable");
  }
}

pub fn check2(_: String) {
  
  let handle1 = std::thread::spawn(move || {
    for i in 0..19 {
      println!("do something 1th {}", i);
    }
  });

  let handle2 = std::thread::spawn(move || {
    for i in 0..19 {
      println!("do something 2th {}", i);
    }
  });

  let handle3 = std::thread::spawn(move || {
    for i in 0..19 {
      println!("do something 3th {}", i);
    }
  });

  handle1.join().expect("fail");
  handle2.join().expect("fail");
  handle3.join().expect("fail");
}
