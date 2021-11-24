use super::sub_modules::m2src;

pub fn run(){
  let s = String::from("asd");
  let context = m2src::Context::new(&s);

  // let parser = m2src::Parser{
  //   context: &context
  // };

  match m2src::parse_context(context) {
    Ok(_) => { println!("OK") },
    Err(e) => { println!("err: {:?}", e) }
  }
}

use super::sub_modules::m2r2;

pub fn run2() {
  m2r2::Ref::new(&1);
}

use super::sub_modules::m2r3;

pub fn run3() {
  let num = 5;

  let obj = Box::new( m2r3::Ball{diameter: &num} ) as Box<m2r3::Red>;
}