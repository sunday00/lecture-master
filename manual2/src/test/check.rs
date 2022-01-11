pub fn check(_: String) {
  let a = vec![11, 22, 44, 55, 88];
  let p = a.iter().position(|a| { 
    println!("{:?}, {:?}", a, *a);
    *a == 55 
  });

  println!("{:?}", p);
}