#[derive(Debug)]
#[allow(dead_code)]
enum Message {
  Quit,
  Move { x: i32, y: i32 },
  Write(String),
  ChangeColor(i32, i32, i32),
}

impl Message {
  fn call(&self) {
    println!("you call {:?}", self);
  }
}

pub fn run() {
  let m = Message::Write(String::from("hello"));
  m.call();

  // some code...

  match m {
    Message::Write(msg) => println!("{}", msg),
    _ => println!(" variable m is not message of write "),
  }
}
