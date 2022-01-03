pub fn mut_ref (_: String) {
  let mut num = 8;
  let num_ref = &mut num;

  println!("{}", num_ref);

  *num_ref += 1;

  println!("{}", num)
}

pub fn borrow (_: String) {
  let mut number = 10;               // ---->+---->+
                                     //      |     |
  // let num_ref = &number;          //  <---+     | borrow as immutable
                                     //            | 
  // let mut_num_ref = &mut number;  //  <---------+ also borrow as mutable
                                     // this is not possible

  // *mut_num_ref += 10;

  // println!("{}", num_ref);

  let mut_num_ref = &mut number;   // mutable ref
  *mut_num_ref += 1;               // original change

  let num_ref = & number;          // immutable ref from already changed original
  println!("{}", num_ref);         // print ref
}

pub fn shadow (_: String) {
  let country = String::from("Dutch");
  let country_ref = &country;
  let country = 6;
  println!("country: {}, country_ref: {}", country, country_ref)
}