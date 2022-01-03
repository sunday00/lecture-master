pub fn what (_: String) {
  let mut counter = 0;
  let m_number = loop {
    counter+=1;
    println!("{} is now", counter);
    if counter == 5 {
      break counter;
    }
  };

  println!("{}", m_number)
}

pub fn nest (_: String) {
  let mut counter = 0;
  let mut counter2 = 0;

  println!("outer loop");

  'outer: loop {
    counter += 1;
    println!("current : {}", counter);

    println!("inner loop !!! ===========");

    'inner : loop {
      counter2 += 1;
      println!("!+!+!+! current2 : {} !+!+!+!", counter2);

      if counter2 > 4 {
        break 'inner
      }
    }

    counter2 = 0;
    if counter > 9 {
      break 'outer
    }
    
  }
}

pub fn rng (_:String) {
  for n in 0..3 {
    println!("{}", n);
  }

  println!("==================");

  for n in 0..=3 {
    println!("{}", n);
  }

  println!("==================");

  for _ in 0..=3 {
    println!("hello");
  }
}

pub fn comb_v (_:String) {
  fn match_closure(rgb: (u8, u8, u8)) {
    let v = vec![(rgb.0, "red"), (rgb.1, "green"), (rgb.2, "blue")];

    let mut all_have_at_least_10 = true;

    for i in v {
      if i.0 < 10 {
        all_have_at_least_10 = false;
        println!("not enough {}", i.1)
      }
    }

    if all_have_at_least_10 {
      println!("great")
    }

    println!();  // this is just break line more. like br tag
  }

  match_closure((200, 0, 0));
  match_closure((50, 60, 70));
  match_closure((250, 11, 0));
}

