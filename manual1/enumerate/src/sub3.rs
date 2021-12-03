#[derive(Debug)]
enum IpAddr {
  V4(u8, u8, u8, u8),
  V6(String),
}

#[derive(Debug)]
struct Backend {
  name: String,
  lang: String,
  ver: u8,
  is_compile: bool,
}

#[derive(Debug)]
struct Frontend {
  name: String,
  ver: u8,
  libs: Vec<String>,
}

#[derive(Debug)]
#[allow(dead_code)]
enum Programming {
  BackendProgramming(Backend),
  FrontendProgramming(Frontend),
}

#[allow(unused)]
pub fn run() {
  let home = IpAddr::V4(127, 0, 0, 1);
  let office = IpAddr::V6(String::from(":::1"));

  let mut libs = Vec::new();
  libs.push(String::from("vue-router"));
  libs.push(String::from("vuex"));

  let vue = Programming::FrontendProgramming(Frontend {
    name: String::from("vue"),
    ver: 3,
    libs: libs,
  });

  println!("{:#?}", vue);
}
