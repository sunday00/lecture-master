pub fn lambda (_: String) {
  let my_lambda = |x: u8| println!("hello closure and {}", x);

  my_lambda(8);
}

pub fn use_outside(_: String) {
  let n = 6;
  let m = 10;

  let cl = || println!("{}", n+m);

  cl();
}

pub fn use_unwrap(_: String){
  let v = vec![8,9,10];

  let fourth = v.get(3).unwrap_or_else(|| {
    if v.get(0).is_some() {
      &v[0]
    } else {
      &0
    }
  });

  println!("{}", fourth)
}

pub fn use_map (_: String) {
  let v = vec![8,9,10];

  let double_v = v.iter().map(|n| n * 2).collect::<Vec<u8>>();

  println!("{:?}", double_v);

  v.iter().enumerate().for_each(|(i, n)| println!("{}, {}", i, n));
}
