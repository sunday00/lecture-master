pub fn hi (arg: String) {
  println!("{}", arg)
}

pub fn block_value(){
  let a = 7;
  let b = {
    let c = 100;
    let d = 100;
    c + d
  };

  println!("{}, {}, {}",a, b, a+b )
}

struct DD {
  data: u8
}

impl std::fmt::Display for DD {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    write!(f, "this is display : ({})", self.data)
  }
}

impl std::fmt::Debug for DD {
  fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
    write!(f, "this is debug : ({}). type is DD. data = u8", self.data)
  }
}

pub fn debug () {
  let _empty_tuple = ();

  // println!("{}", _empty_tuple);

  let d = DD { data: 8 };
  println!( "{}", d );
  println!( "{:?}", d );
}
