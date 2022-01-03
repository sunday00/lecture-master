fn print_country(s: String){
  println!("{}", s);
}

fn print_num(n: u8){
  println!("{}", n);
}

pub fn print_int () {
  let s = String::from("Myanmar");
  // print_country(s);
  print_country(s.clone());
  // print_country(s);
  print_country(s);

  let n: u8 = 7;
  print_num(n);
  print_num(n);
  print_num(n);
}

fn print_length(s: String) {
  println!("{} : {:p}", s.split_whitespace().count(), &s);
}

fn print_length_arg(s: &String) {
  println!("{} : {:p}", s.split_whitespace().count(), s);
}

pub fn clone (){
  let mut s = String::new();
  for _ in 0..25 {
    s.push_str("hello and this is bad");
    print_length(s.clone());
  }

  let mut ss = String::new();
  for _ in 0..25 {
    ss.push_str("hello and this is bad");
    print_length_arg(&ss);
  }
}

fn loop_then_return (mut c: u8) -> u8 {
  loop {
    c += 1;
    if c % 50 == 0 {
      break;
    }
  }
  c
}

pub fn lasting() {
  let n;
  {
    let nn = {
      57
    };

    n = loop_then_return(nn);
  }

  println!("{}", n);

  let nnn;
  {
    nnn = 19
  }

  println!("{}", nnn);
  println!("{}", nnn);
  println!("{}", nnn);
  println!("{}", nnn);
  println!("{}", nnn);
}
