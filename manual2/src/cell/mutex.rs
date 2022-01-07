use std::sync::Mutex;

#[allow(unused_mut)]
#[allow(unused_variables)]
pub fn ex1(_: String) {

  let my_mutex = Mutex::new(5);
  let mut mutex_changer = my_mutex.lock().unwrap();

  println!("{:?}", my_mutex);
  println!("{:?}", mutex_changer);

  *mutex_changer = 6;
  println!("{:?}", mutex_changer);

  println!("\n===============\n");

  let my_mutex = Mutex::new(5);
  {
    let mut mutex_changer = my_mutex.lock().unwrap();
  
    println!("{:?}", my_mutex);
    println!("{:?}", mutex_changer);
  
    *mutex_changer = 6;
  }
  println!("{:?}", mutex_changer);
  println!("{:?}", my_mutex);

  println!("\n===============\n");

  let my_mutex = Mutex::new(5);
  let mut mutex_changer = my_mutex.lock().unwrap();
  // my_mutex.lock().unwrap(); // do not unlock more then once
    // program waiting until mutex unlock.

  println!("{:?}", my_mutex);
  println!("{:?}", mutex_changer);

  *mutex_changer = 6;
  std::mem::drop(mutex_changer);

  println!("{:?}", my_mutex);

  println!("\n===============\n");

  let my_mutex = Mutex::new(5);
  let mut mutex_changer = my_mutex.lock().unwrap();
  let mut other_mutex_changer = my_mutex.try_lock();

  if let Ok(value) = other_mutex_changer {
    println!("{:?}", value);
  }  
}

pub fn ex2(_: String) {
  let m = Mutex::new(6);

  *m.lock().unwrap() = 6; // unlock and make it 6
  println!("{:?}", m);
}


