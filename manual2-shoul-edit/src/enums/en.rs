pub fn what(time:String){
  let time = time.parse::<u8>().unwrap();
  if time > 24 {
    panic!("time should be between 0-24")
  }

  #[derive(Debug)]
  enum SkyThings {
    Sun, Stars, Moon
  }

  fn create_skystate(time: &u8) -> Vec<SkyThings> {
    match time {
      6..=18 => vec!(SkyThings::Sun),
      _ => vec!(SkyThings::Stars, SkyThings::Moon)
    }
  }

  fn check_skystate(state: &Vec<SkyThings>){
    match state[..] {
      [SkyThings::Sun] => println!("Wonderful"),
      _ => println!("See... {:?}, {:?}", state[0], state[1])
    }
  }
  
  let skystate = create_skystate(&time);
  println!("{:?}", skystate);
  check_skystate(&skystate);
}

pub fn v (time: String) {
  let time = time.parse::<u8>().unwrap();
  if time > 24 {
    panic!("time should be between 0-24")
  }

  #[derive(Debug)]
  enum SkyThings {
    Sun(String),
    Stars(String),
    Moon(String),
  }

  fn create_skystate(time: &u8) -> Vec<SkyThings> {
    match time {
      6..=18 => vec!(SkyThings::Sun("Beautiful world".to_string())),
      _ => vec!(
          SkyThings::Stars("Amazing universe".to_string()),
          SkyThings::Moon("Too Alone...".to_string()))
    }
  }

  fn check_skystate(state: &Vec<SkyThings>){
    match &state[..] {
      [SkyThings::Sun(m)] => println!("{}", m),
      _ => {
        let mut x: String = String::new();
        let mut y: String = String::new();
        if let SkyThings::Stars(m) = &state[0]{
          x = m.to_string()
        }
        if let SkyThings::Moon(n) = &state[1]{
          y = n.to_string()
        };
        println!("See... {:?}, {:?}", x, y)
      }
    }
  }
  
  let skystate = create_skystate(&time);
  println!("{:?}", skystate);
  check_skystate(&skystate);
}

pub fn using(_:String) {
  #[allow(dead_code)]
  enum Mood {
    Happy,
    Sleepy,
    Angry
  }

  fn match_mood(mood: &Mood) -> u8 {
    use Mood::*;
    return match mood {
      Happy => 1,
      Sleepy => 2,
      Angry => 11,
    }
  }

  println!("{}", match_mood(&Mood::Angry))
}