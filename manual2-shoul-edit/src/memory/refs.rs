// fn return_str() -> &'static str {
fn return_str() -> () {
  let country = String::from("CANADA");
  let _country_ref = &country;

  // _country_ref 
  // this is dangling! Err
}

pub fn run (_s: String) {
  let country: String = String::from("USA");
  let r_one = &country;

  println!("{:p}" , &country);
  println!("{:p}" , r_one);

  let _country2 = return_str();
  // println!("{}", country2);
}

pub fn addr () {
  let a = String::from("hello"); 
  println!("a :{:p}", &a);
  let b = &a;
  println!("b :{:p}", b);
  let c = a.clone();
  println!("c :{:p}", &c);
}
