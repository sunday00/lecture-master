struct Point {
  x: u8,
  y: u8,
}

pub fn run() {
  let p = Point{x: 0, y: 7};

  let Point{ x: a, y: b} = p;
  println!("{}", a);
  println!("{}", b);

  let Point{x, y} = p;
  println!("{}", x);
  println!("{}", y);

  match p {
    Point { x, y: 0 } => println!("On the x axis at {}", x),
    Point { x: 0, y } => println!("On the y axis at {}", y),
    Point { x, y } => println!("On neither axis: ({}, {})", x, y),
  }
  
}

enum Message {
  Quit,
  Move {x:u8, y:u8},
  Write(String),
  ChangeColor(u8, u8, u8) 
}

pub fn run2() {
  let msg = Message::ChangeColor(0,160,255);

  match msg {
    Message::Quit => { println!("no data quit") },
    Message::Move {x, y} => { println!("move to {},{}", x, y) },
    Message::Write(text) => { println!("some text written {}", text) },
    Message::ChangeColor(r, g, b) => { println!("color to {},{},{}", r, g, b) },
  }

  let points = vec![
    Point{ x:0, y:0 },
    Point{ x:2, y:8 },
    Point{ x:9, y:3 },
    Point{ x:2, y:7 },
  ];

  let square_of_sum: Vec<u8> = points.iter().map(|&Point{x,y}| (x+y) * (x+y)).collect::<Vec<u8>>();

  println!("{:?}", square_of_sum)
}


