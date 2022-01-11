pub fn app(_: String) {
  #[allow(unused_imports)]
  use std::mem;

  fn apply<F>(mut f: F) 
    where F: FnMut() {
      f();
  }

  #[allow(dead_code)]
  fn apply_3<F>(f: F) -> i32 
    where F: Fn(i32) -> i32 {
      f(3)
  }

  let greeting = "hello";
  let mut farewell = "bye".to_owned();

  let diary = | | {
  // fn diary () {
    println!("I said {}", greeting);

    farewell.push_str("!!!"); // 외부값을 바꿀때는 FnMut
    println!("Then I screamed {}.", farewell);
    println!("ZZZ");

    // mem::drop(farewell); // 메모리에서도 버릴거면 FnOnce
    // 단순 클로져일떄는 Fn
  };

  apply(diary);

  let double = |x| 2 * x;

  println!("3 doubled: {}", apply_3(double));
}

pub fn take_what(_: String) {
  let mut s = String::from("HI");
  let c = || println!("{}", s);

  c();
  c();
  c();
  c(); // not problem. closure Fn take ref.

  let mut fnmut_c = || {
    s.push_str(" added");
    println!("{}", s);
  };

  fnmut_c();
  fnmut_c();
  fnmut_c();
  fnmut_c(); // fnmut update original

  let m = vec![8,9,10].into_iter()
    .map(|x| x as u8).map(|x| x+2).collect::<Vec<u8>>();

  println!("{:?}", m);
  
}
