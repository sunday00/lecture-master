pub fn run () {
  let x = Some(2);
  // let Some(x) = x;

  if let Some(x) = x {
    println!("{}", x)
  }

  if let x = 1 {
    println!("{}", x)
  }
}

pub fn run2 () {
  let x = 1;

  match x {
    1 => println!("one"),
    2 => println!("two"),
    3 => println!("three"),
    _ => println!("over")
  }

  let n = Some(5);
  let m = 10;

  match n {
    Some(50) => println!("50"),
    Some(m) => println!("m...: {:?}", m),
    _ => println!("default...n...: {:?}", n),
  }

  println!("n and m, {:?}, {:?}", n, m);

  let p = 1;

  match p {
    1|2 => println!("1 or 2"),
    3 => println!("3"),
    _ => println!(" _ "),
  }
}

pub fn run3 () {
  let x = 5;

  match x {
    1 ..= 5 => println!("1 ~ 5"),
    _ => println!("out of numbers")
  }

  let l = 'k';

  match l {
    'a' ..= 'j' => println!("a ~ j"),
    'k' ..= 'z' => println!("k ~ z"),
    _ => println!("no lowercase alphabet")
  }
  
}
