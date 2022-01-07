#[allow(unused_variables)]
pub fn check(_: String) {
  fn ret_ref()-> &'static str {
    let my_string = String::from("this us string!!");
    // &my_string
    "fds"
  }

  let result = ret_ref();
  println!("{}", result);
}

pub fn city(_: String) {
  
  let v = vec!["Busan".to_string()];

  #[derive(Debug)]
  #[allow(dead_code)]
  struct City<'a> {
    name: &'a str,
    date_founded: u32,
  }
  // lifetime 'a DOSE NOT MEAN make name should live until City
  // lifetime 'a MEANS City can take name when name is living as long as City.

  let my_city = City {
    name: "Suwon",
    date_founded: 1950,
  };

  println!("{:?}", my_city);

  let sec_city = City {
    name: &v[0],
    date_founded: 1951,
  };

  println!("{:?}", sec_city);
}

pub fn anonymous(_: String) {
  
  #[derive(Debug)]
  #[allow(dead_code)]
  struct Adventure<'a> {
    name: &'a str,
    hit_point: u32
  }

  #[allow(dead_code)]
  impl Adventure<'_> {
    fn take_damage(&mut self) {
      self.hit_point -= 20;
      println!("{:?}", self)
    }
  }

  impl std::fmt::Display for Adventure<'_> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
      write!(f, "{:?}", self)
    }
  }

  let mut bill = Adventure {
    name: "bill",
    hit_point: 10_000,
  };

  println!("{}", bill);
  bill.take_damage();
}

