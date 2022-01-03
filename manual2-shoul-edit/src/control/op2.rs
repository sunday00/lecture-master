pub fn option3(_:String){
  let v = vec![2, 3, 4];
  // let get_one = v.get(0);
  // let get_two = v.get(10);

  // println!("{:?}", get_one);
  // println!("{:?}", get_two);

  for i in 0..10 {
    match v.get(i) {
      Some(n) => println!("{} : {}", i, n),
      None => {}
    }
  }
}

pub fn complex(_:String){
  let v = vec![2, 3, 4];

  for i in 0..10 {
    if let Some(n) = v.get(i) {
      println!("{}", n)
    }
  }
}

pub fn wether (_:String) {
  let w = vec![
    vec!["Berlin", "cloudy", "5", "-7", "78"],
    vec!["Athens", "sunny", "not humid", "20", "10", "50"],
  ];

  for mut city in w {
    println!("For the city of {}", city[0]);
    while let Some(info) = city.pop() {
      if let Ok(n) = info.parse::<u8>(){
        println!("number info : {}", n)
      }
    }
  }
}
