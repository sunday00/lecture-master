pub mod a {
  pub mod series {
    pub mod of {
      pub fn nested_modules() {
        println!("very nested!!");
      }
    }
  }
}

mod b {
  pub mod series {
    pub mod of {
      pub fn nested_modules() {
        println!("very nestedddddd!!");
      }
    }
  }
}

mod c {
  pub mod series {
    pub mod of {
      pub fn nested_modules() {
        println!("direct!!!");
      }
    }
  }
}

pub fn run() {
  a::series::of::nested_modules()
}

use b::series::of;
pub fn run2() {
  of::nested_modules();
}

use c::series::of::nested_modules;
pub fn run3() {
  nested_modules();
}

#[derive(Debug)]
#[allow(dead_code)]
enum TrafficLight {
  Red,
  Orange,
  Green,
}

#[allow(unused_imports)]
// use TrafficLight::{Orange, Red};
use TrafficLight::*;

#[allow(dead_code)]
fn light() {
  println!("{:?}", Red);
}
