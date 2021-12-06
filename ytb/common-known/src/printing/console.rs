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