use std::thread;
use std::time::Duration;
use rand::prelude::*;

struct Cacher<T> where T: Fn(u32) -> u32 {
  calculation: T,
  value: Option<u32>
}

impl<T> Cacher<T> where T: Fn(u32) -> u32 {
  fn new (calculation: T) -> Cacher <T> {
    Cacher {
      calculation, 
      value: None,
    }
  }

  fn value(&mut self, arg: u32) -> u32 {
    match self.value {
      Some(v) => v,
      None => {
        let v = (self.calculation)(arg);
        self.value = Some(v);
        v
      }
    }
  }
}

pub fn main(args: Vec<String>) {
  let simulated_user_specified_value = args[0].parse::<u32>().unwrap();
  let simulated_random_number = random();

  generate_workout (
    simulated_user_specified_value,
    simulated_random_number
  );
}

pub fn generate_workout (intensity: u32, random_number: u32) {
  // let expensive_result = simulated_expensive_calculation(intensity);
  // let expensive_closure = |param| {
  //   println!("calc now...");
  //   thread::sleep(Duration::from_secs(2));
  //   param
  // };
  let mut expensive_result = Cacher::new(|param| {
    println!("calc now...");
    thread::sleep(Duration::from_secs(2));
    param
  });

  if intensity < 25 {
    println!("Today, do {} pushups!", expensive_result.value(intensity));
    println!("Next, do {} situps!", expensive_result.value(intensity));
  } else {
    if random_number == 3 {
      println!("Take a break today! Remember to stay hydrated!");
    } else {
      println!("Today, run for {} minutes!", expensive_result.value(intensity));
    }
  }
}

// pub fn simulated_expensive_calculation  (intensity : u32 ) -> u32 {
//   println!("calc now...");
//   thread::sleep(Duration::from_secs(2));
//   intensity
// }

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn cacher_can_dynamic () {
    let mut c = Cacher::new(|a| a);

    let v1 = c.value(1);
    let v2 = c.value(2);

    assert_eq!(v1, 1);
    assert_eq!(v2, 2);
  }

  #[test]
  fn cacher_can_dynamic2 () {
    let x = vec![1, 2, 3];
    let equal_to_x = move |z: Vec<u8>| z == x;
    let y = vec![1, 2, 3];
  
    assert!(equal_to_x(y));
  }
}

/**
 * 
trait Iterator {
  type Item;

  fn next(&mut self) -> Option<Self::Item>;

  // methods with default implementations elided
}
*
*/

pub fn main2 (_args: Vec<String>) {
  let v1 = vec![1, 2, 3];

  let v1_iter = v1.iter();

  for val in v1_iter {
    println!("{}", val);
  }
}

#[cfg(test)]
#[allow(unused_imports)]
mod test2 {
  use super::*;

  #[test]
  fn iterator_test () {
    let v1 = vec![1, 2, 3];

    let mut v1_iter = v1.iter();

    assert_eq!(v1_iter.next(), Some(&1));
    assert_eq!(v1_iter.next(), Some(&2));
    assert_eq!(v1_iter.next(), Some(&3));
    assert_eq!(v1_iter.next(), None);
  }

  #[test]
  fn iterator_sum () {
    let x = vec![1, 2, 3];
    let x_iter = x.iter();
    let total: i32 = x_iter.sum(); // x_iter consuming is done. no more left x_iter

    // println!("{:?}", x_iter); // impossible. 

    assert_eq!(total, 6);
  }

  #[test]
  fn iterator_map () {
    let v1 = vec![1, 2, 3];
    // iterator1
    
    let v2: Vec<u8> = v1.iter().map( |x| x + 1 ).collect();
    //iterator1 lazy, so call iter().
      // mapping around calling next(), v1[n] + 1 will be done when ... 
                              //| not this time. this returns new iterator. iterator2.
                                                // of course, iterator2 is lazy, so calling is needed.

    println!("{:?}", v2)
  }
}
