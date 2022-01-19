pub fn rand_do(_: String) {
  #[allow(unused_imports)]
  use rand;

  for _ in 0..5{
    let ran_u16 = rand::random::<u16>();
    println!("{}", ran_u16);
  }
}

pub fn rand_do_th(_: String) {
  use rand::{thread_rng, Rng};

  let mut number_maker = thread_rng();
  for _ in 0..5 {
    println!("{}", number_maker.gen_range(1..11))
  }
}

pub fn rayon_use(_: String) {
  use rayon::prelude::*;
  
  let mut v = vec![0; 20000];
  v.iter_mut().enumerate().for_each(|(i, n)| *n += i+1 );
  v.par_iter_mut().enumerate().for_each(|(i, n)| *n += i+1 );
}

pub fn etc(_: String) {
  use serde::{Serialize, Deserialize};
  use regex::Regex;

  #[derive(Serialize, Deserialize, Debug)]
  struct Point {
    x: u8,
    y: u8
  }

  let point = Point{ x:1, y: 2};
  let result = serde_json::to_string(&point).unwrap();

  println!("{}", result);

  const S: &str = "On 2010-03-14, foo happened. On 2014-10-14, bar happened.";

  let re = Regex::new(r"(\d{4})-(\d{2})-(\d{2})").unwrap();
  println!("{:?}", re.captures(S).unwrap());

}
