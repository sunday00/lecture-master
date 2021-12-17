pub fn implement (_:String) {
  
  #[allow(dead_code)]
  enum Mood {
    Good,
    Bad,
    Sleepy
  }

  impl Mood {
    fn check(&self) -> String {
      match self {
        Mood::Good => String::from("good"),
        Mood::Bad => String::from("bad"),
        Mood::Sleepy => String::from("sleepy"),
      }
    }
  }

  let m = Mood::Sleepy;

  println!("{}", m.check())
}