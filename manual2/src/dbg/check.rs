pub fn check(_: String) {
  let n = 8;
  dbg!(n); //line, file 등을 프린트 해준다. laravel에서 dd 역할인듯
}

pub fn veg_dbg(_: String) {
  let mut n = dbg!(9);
  dbg!(n += 10);

  let new_v = dbg!(vec![n, 9, 10]);
  let double_v = dbg!(new_v.iter()
    .map(|x| x * 2).collect::<Vec<i32>>());

  dbg!(double_v);
}


