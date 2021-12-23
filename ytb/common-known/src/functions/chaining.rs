pub fn make_v(_: String) {
  let new_vec = (1..=10).collect::<Vec<u8>>();
  println!("{:?}", new_vec);

  let chars = ['g', 'd', 'k', 'k', 'n'];
  let hello = chars.iter()
    .map(|&x| x as u8)
    .map(|x| (x + 1) as char)
    .collect::<String>();
  println!("{:?}", hello);

  use std::collections::VecDeque;

  let vec_deque = (1..=3).collect::<VecDeque<i32>>();
  println!("{:?}", vec_deque);
}

pub fn chain(_: String) {
  let vv = (1..=10).collect::<Vec<u8>>();

  let new_vec: Vec<u8> = vv
    .into_iter()
    .skip(3)
    .take(4)
    .collect();

  println!("{:?}", new_vec)
} 