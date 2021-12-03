#[allow(irrefutable_let_patterns)]
#[allow(unused_variables)]
pub fn run() {
  // let v: Vec<u8> = Vec::new();
  let mut v = vec![1u8, 2u8, 3u8];
  v.push(4);

  let n = v[2];
  let non: Option<&u8> = v.get(100);

  if non == None::<&u8> {
    println!("no index")
  }
}

pub fn run2() {
  let mut v = vec![11, 12, 13];
  let _f = &v[0];
  v.push(14);

  println!("{}", v[v.len() - 1]);
}

pub fn run3() {
  let mut v = vec![
    String::from("apple"),
    String::from("banana"),
    String::from("cherry"),
    String::from("durian"),
    String::from("egg"),
  ];

  for i in &mut v {
    *i = format!("{}{}", i, "!");
  }

  println!("{:?}", v);
}

pub fn run4() {
  #[derive(Debug)]
  enum SpreadsheetCell {
    Int(i32),
    Float(f64),
    Text(String),
  }

  let row = vec![
    SpreadsheetCell::Int(3),
    SpreadsheetCell::Text(String::from("blue")),
    SpreadsheetCell::Float(10.12),
  ];

  println!("{:?}", row);
}
