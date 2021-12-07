#[allow(unused_mut)]
#[allow(unused_assignments)]
#[allow(unused_variables)]
pub fn mutable_comp_type () {
  let mut ss : String = String::from("abc");
  let mut sss : &str = "abc";
  // _ss = "asd";
  ss = sss.to_string();

  let ss = format!("{}", &sss);
  let sss = &(format!("{}", &ss))[..] ;

  println!("{}, {}", ss, sss)
}
