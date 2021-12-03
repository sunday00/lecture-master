fn largest ( list: &[i8] ) -> i8 {
  let mut largest = list[0];

  for &item in list.iter() {
    if item > largest {
      largest = item;
    }
  }

  largest
}

// fn largest_i8 (list: &[i8]) -> i8 {
//   let mut largest = list[0];

//   for &item in list.iter() {
//     if item > largest {
//       largest = item;
//     }
//   }

//   largest
// }

// fn largest_char (list: &[char]) -> char {
//   let mut largest = list[0];

//   for &item in list.iter() {
//     if item > largest {
//       largest = item;
//     }
//   }

//   largest
// }

fn largest_g<T: PartialOrd + Copy> (list: &[T]) -> T {
  let mut largest = list[0];

  for &item in list.iter() {
    if item > largest {
      largest = item;
    }
  }

  largest
}

pub fn run1 () {
  let numbers = vec![34, 50, 25, 100, 65];
  // let mut largest = numbers[0];

  // for number in numbers {
  //   if number > largest {
  //     largest = number;
  //   }
  // }

  let largest_no = largest( &numbers );

  println!("{}", largest_no);



  let numbers = vec![102, 34, 100, 89, 54, 2, 43, 8];
  
  let largest_no = largest( &numbers );

  println!("{}", largest_no);

}

pub fn run2 () {
  let numbers = vec![34, 50, 25, 100, 65];
  // let result = largest_i8(&numbers);
  let result = largest_g(&numbers);
  println!("{}", result);

  let chars = vec!['y', 'm', 'a', 'q'];
  // let result = largest_char(&chars);
  let result = largest_g(&chars);
  println!("{}", result);
}

pub trait Summarizable {
  fn summary(&self) -> String;
}

pub struct NewsArticle {
  pub headline: String,
  pub location: String,
  pub author: String,
  pub content: String,
}

pub struct Tweet {
  pub username: String,
  pub content: String,
  pub reply: bool,
  pub retweet: bool,
}

impl Summarizable for NewsArticle {
  fn summary(&self) -> String {
    format!("{}, by {} ({})", self.headline, self.author, self.location)
  }
}

impl Summarizable for Tweet {
  fn summary(&self) -> String {
    format!("{}, by {} ", self.content, self.username)
  }
}

pub fn run3 () {
  let twt = Tweet{
    username : String::from("sun"),
    content : String::from("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae repellendus et fugit reprehenderit veritatis ut repellat corrupti officiis perferendis fuga esse praesentium temporibus dolorem, necessitatibus laboriosam non hic eos corporis."),
    reply : false,
    retweet : false,
  };

  println!("{}", twt.summary())
}

