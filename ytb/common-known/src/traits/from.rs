use std::fmt::Display;

/*
From<&'_ [T]>
From<&'_ mut [T]>
From<&'_ str>
From<&'a Vec<T>>
From<[T; N]>
From<BinaryHeap<T>>
From<Box<[T]>>
From<CString>
From<Cow<'a, [T]>>
From<String>
From<Vec<NonZeroU8>>
From<Vec<T>>
From<VecDeque<T>>
*/

pub fn conv1(_: String) {
  fn print_v<T>(i: &Vec<T>) where T: Display {
    for item in i {
      print!("{} ", item);
    }
    println!();
  }

  let arr = Vec::from([8, 9, 10]);
  print_v(&arr);

  let str_v = Vec::from("hello");
  print_v(&str_v);

  let string_v = Vec::from("hello".to_string());
  print_v(&string_v);
}

pub fn conv2(_: String) {
  #[derive(Debug)] 
  struct City {
    name: String,
    population: u32,
  }

  impl City {
    fn new(name: &str, population: u32) -> Self {
      Self {
        name: name.to_string(),
        population,
      }
    }
  }

  #[derive(Debug)]
  struct Country {
    cities: Vec<City>,
  }

  impl From<Vec<City>> for Country {
    fn from(cities: Vec<City>) -> Self {
      Self { cities }
    }
  }

  let helsinki = City::new("Helsinki", 631_695);
  let turku = City::new("Turku", 186_756);

  let finland = Country::from(vec![helsinki, turku]);

  println!("{:?}", finland);
}

use std::convert::From;

pub fn conv3(_: String){
  struct EvenOddVec(Vec<Vec<i32>>);

  impl From<Vec<i32>> for EvenOddVec {
    fn from(input: Vec<i32>) -> Self {
      let mut even_odd_vec: Vec<Vec<i32>> = vec![
        vec![], vec![]
      ];

      for i in input {
        if i % 2 == 0 {
          even_odd_vec[0].push(i);
        } else {
          even_odd_vec[1].push(i);
        }
      }

      Self(even_odd_vec)
    }
  }

  let bunch_of_n = vec![8, 7, -1, 3, 222, 9787, -47, 77, 0, 55, 7, 8];
  let new_v = EvenOddVec::from(bunch_of_n);

  println!("e {:?} v {:?}", new_v.0[0], new_v.0[1] )
}
