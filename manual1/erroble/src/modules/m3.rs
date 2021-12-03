pub fn run () {
  let mut setting_value = Some(5);
  let new_setting_value = Some(10);

  match (setting_value, new_setting_value) {
    (Some(_), Some(_)) => {
      println!("Can't overwrite an existing customized value");
    }
    _ => {
      setting_value = new_setting_value;
    }
  }

  println!("{:?}", setting_value);

  let numbers = (2,3,4,5,6,7,8,9,10);
  match numbers {
    ( n1, _, n2, _, n3, _, n4, _, n5 ) => {
      println!("even {}, {}, {}, {}, {} ", n1, n2, n3, n4, n5)
    }
  }  

  struct Point {
    x: u8,
    y: u8,
    z: u8,
  }

  let origin = Point{x:1, y:10, z:100};

  match origin {
    Point {x, ..} => println!("x is {}", x)
  }

  match numbers {
    (n1, .., ne) => {
      println!("{}, {}", n1, ne)
    }
  }

}

pub fn run2 () {
  let robot = Some(String::from("BOT"));

  match &robot {
    Some(name) => println!("{}", name),
    None => (),
  }

  println!("{:?}", robot);

  // =========== eq ==============

  let robot2 = Some(String::from("BOT"));

  match robot2 {
    Some(ref name) => println!("{}", name),
    None => (),
  }

  println!("{:?}", robot2);

  // ============ mut =============

  let mut robot3 = Some(String::from("BOT"));

  match robot3 {
    Some(ref mut name) => *name = String::from("others"),
    None => (),
  }

  println!("{:?}", robot3);

}

pub fn run3(){
  let num = Some(4);

  match num {
    Some(x) if x < 5 => println!("less than five: {}", x),
    Some(x) => println!("{}", x),
    None => {}
  }

  // ========== ref to out of scope ============
  let x = Some(10);
  let y = 10;

  match x {
    Some(50) => println!("Got 50"),
    Some(n) if n == y => println!("some is eq Y : {}", n),
    _ => {}
  }

  println!("end... : {:?}, {}", x, y)
}

pub fn run4 () {
  let x = 4;
  let y = false;

  match x {
    4 | 5 | 6 if y => println!("high"), // means (4|5|6) and if y
    _ => println!("low")
  }

}

pub fn run5 () {
  enum Message {
    Hello { id: u8 }
  }

  let msg = Message::Hello{id:5};

  match msg {
    Message::Hello { id: iv @ 3...7 } => {
      println!("id is : {}", iv)
    },
    Message::Hello { id: iv @ 8...14 } => {
      println!("id is higher : {}", iv)
    },
    Message::Hello { id } => {
      println!("id is more higher : {}", id)
    },
  }

  
}
