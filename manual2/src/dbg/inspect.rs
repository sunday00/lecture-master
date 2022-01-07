#[allow(unused_variables)]
pub fn inspect_v(_: String) {
  let v = vec![8,9,10];
  let double_v: Vec<i32> = v.iter()
    .inspect(|f| println!("{}", f))
    .map(|x| x * 2)
    .inspect(|n| println!("{}", n))
    .collect();
}

pub fn referf(_: String) {
  let v = vec![8,9,10];
  let double_v: Vec<i32> = v.iter().inspect(|f| {
    println!("item: {}", f);

    match **f % 2 {
      0 => println!("even"),
      _ => println!("odd"),
    }
    println!("{:b}", f);
  }).map(|x| x * 2)
  .collect();
  println!("{:?}", double_v);
}