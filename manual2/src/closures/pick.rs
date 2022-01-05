pub fn peekable(_: String){
  let n = vec![1, 5, 100]; 
  let mut i = n.iter().peekable();

  println!("{:?}", i);

  println!("{:?}", i.peek().unwrap());
  i.next();
  println!("{:?}", i.peek().unwrap());
}

pub fn loc (_:String) {
  let locations = vec![
    ("Nevis", 25),
    ("Taber", 8428),
    ("Markerville", 45),
    ("Cardston", 3585),
  ];

  let mut location_iter = locations.iter().peekable();
  while location_iter.peek().is_some() {
    match location_iter.peek() {
      Some((name, number)) if *number < 100 => {
        println!("f town: {}, {}", name, number)
      }
      Some((name, number)) => println!("f city: {}, {}", name, number),
      None => break,
    }
    location_iter.next();
  }
}