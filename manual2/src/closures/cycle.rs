pub fn get_odd(_: String) {
  let even_odd = vec!["even", "odd"];

  let even_odd_vec = (0..6)
    .zip(even_odd.into_iter().cycle())
    .collect::<Vec<(u8, &str)>>();

  println!("{:?}", even_odd_vec) 
}

pub fn use_fold(_:String) {
  let some_numbers = vec![9,6,9,10,11];

  println!("{}", some_numbers.iter().fold(
    0, |tot, next_n| tot + next_n
  )); // fold does like reduce of js
 
  let s = "I don't have any dashes in me.";

  println!("{}", s.chars()
    .fold("-".to_string(), |mut tot, next| {
    tot.push(next);
    tot.push('-');
    tot
  }));
}

pub fn div_vec(_: String) {
  let v = vec![1,2,3,4,5,6,7,8,9,0];

  for i in v.iter().take_while(|&&n| n < 5){
    println!("{}", i)
  }

  println!("{:?}", v);

  for c in v.chunks(3){
    println!("{:?}", c);
  }

  for w in v.windows(3){
    println!("{:?}", w);
  }
}


