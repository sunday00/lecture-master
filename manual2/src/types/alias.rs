pub fn mean(_: String) {
  // fn returns<'a>(input: &'a Vec<char>) -> std::iter::Take<std::iter::Skip<std::slice::Iter<'a, char>>> {
  //   input.iter().skip(4).take(5)
  // }

  type SkipFourTakeFive<'a> = std::iter::Take<std::iter::Skip<std::slice::Iter<'a, char>>>;
  fn returns<'a>(input: &'a Vec<char>) -> SkipFourTakeFive {
    input.iter().skip(4).take(5)
  }

  let v = vec!['a', 'b', 'c', 'd', 'e', 'f'];
  let vv: Vec<&char> = returns(&v).collect();
  
  println!("{:?}", vv);
}

pub fn using_use(_: String) {

  #[allow(dead_code)]
  enum MapDirection {
    N,E,W,S,
  }

  fn go_direction(d: &MapDirection) {
    use MapDirection::*;
    let prefix = "Go to ";

    match d {
      N => println!("{} north", prefix),
      E => println!("{} east", prefix),
      W => println!("{} west", prefix),
      S => println!("{} south", prefix),
    }
  }

  go_direction(&MapDirection::E);
}

pub fn using_use_as(_: String) {
  #[allow(dead_code)]
  enum FileState {
    PermissionDenied,
    CurrentlyOpen,
    ReadOnly,
    NotFound,
    Translating,
    Removed,
    Fine,
  }

  #[allow(dead_code)]
  #[allow(unused_imports)]
  fn file_message(state: &FileState){
    use FileState::{
      PermissionDenied as PD,
      CurrentlyOpen as CO,
      ReadOnly as RO,
      NotFound as NF,
      Translating as TR,
      Removed as RM,
      Fine as FN
    };

    match state {
      FN => println!("ACCESS SUCCESS"),
      RO => println!("ACCESS SUCCESS"),
      _ => println!("ACCESS FAIL"),
    }
  }

  file_message(&FileState::Fine);
}
