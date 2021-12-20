pub fn option1 (_:String) {
  fn take_fifth(value: Vec<i32>) -> Option<i32> {
    if value.len() < 5 {
      None
    } else {
      Some(value[4])
    }
  }

  fn handle_option(my_option: Vec<Option<i32>>){
    for item in my_option {
      match item{
        Some(n) => println!("{}", n),
        None => println!("Not found")
      }
    }
  }

  let v1 = vec![1, 2];
  let v2 = vec![1, 2, 3, 4, 5];
  let mut v3 = Vec::new();

  
  // let index1 = take_fifth(v1);
  // let index2 = take_fifth(v2);
  
  v3.push(take_fifth(v1));
  v3.push(take_fifth(v2));

  // println!("{:?}", index1);
  handle_option(v3);
}

pub fn option2 (_:String) {
  fn take_fifth(value: Vec<i32>) -> Option<i32> {
    if value.len() < 5 {
      None
    } else {
      Some(value[4])
    }
  }

  let v1 = vec![1, 2];
  let v2 = vec![1, 2, 3, 4, 5];
  let v3 = vec![v1, v2];

  for v in v3 {
    let n = take_fifth(v);
    if n.is_some() {
      println!("{}", n.unwrap())
    } else {
      println!("NOT FOUND")
    }
  }

}


