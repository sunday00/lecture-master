pub fn deal (_: String) {
  let name1 = String::from("old-boy");
  let name2 = String::from("parasite");

  let mut my_vec: Vec<String> = Vec::new();

  my_vec.push(name1);
  my_vec.push(name2);

  println!("{:?}", my_vec);
}

pub fn slice (s: String) {
  let born: Vec<u8> = (1..11).collect::<Vec<u8>>();
  let indicator = s.split("-").map(|ss| ss.parse::<u8>().unwrap() as usize ).collect::<Vec<usize>>();
  
  let result = &born[indicator[0]..indicator[1]];

  println!("{:?}", result)
}

pub fn capacity (_: String) {
  let mut num_vec: Vec<u8> = Vec::new();
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.pop();
  num_vec.pop();
  num_vec.pop();
  num_vec.pop();
  println!("{}", num_vec.capacity());
}

pub fn capacity_small (_: String) {
  let mut num_vec: Vec<u8> = Vec::with_capacity(4);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.pop();
  num_vec.pop();
  num_vec.pop();
  num_vec.pop();
  println!("{}", num_vec.capacity());
}

pub fn capacity_large (_: String) {
  let mut num_vec: Vec<u8> = Vec::with_capacity(16);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.push(1);
  println!("{}", num_vec.capacity());

  num_vec.pop();
  num_vec.pop();
  num_vec.pop();
  num_vec.pop();
  println!("{}", num_vec.capacity());
}

pub fn capacity_type (_: String) {
  let _v: Vec<u8> = [1, 2, 3].into();
  let _v2: Vec<_> = [1, 2, 3].into();
  let _v3: Vec<char> = ['1', '2', '3'].into();

  println!("{:?}", _v.len());
}

