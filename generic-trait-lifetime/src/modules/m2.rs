pub trait Summarizable {
  // fn summary(&self) -> String;
  fn author_summary(&self) -> String;

  fn summary(&self) -> String {
    format!("(Read more... by {})", self.author_summary())
  }
}

pub struct NewsArticle {
  pub headline: String,
  pub location: String,
  pub author: String,
  pub content: String,
}

struct WeatherForecast {
  _high_temp: f64,
  _low_temp: f64,
  _chance_of_precipitation: f64,
  author: String,
}

impl Summarizable for WeatherForecast {
  // fn summary(&self) -> String {
  //     format!("The high will be {}, and the low will be {}. The chance of
  //     precipitation is {}%.", self.high_temp, self.low_temp,
  //     self.chance_of_precipitation)
  // }
  fn author_summary(&self) -> String {
    format!("{}", self.author)
  }
}

impl Summarizable for NewsArticle {
  fn author_summary(&self) -> String {
    format!("{}", self.author)
  }
}

// fn notify<T: Summarizable>(item: T){
//   println!("Breaking news~! {}", item.summary());
// }

fn notify<T>(item: T)
  where T: Summarizable {
  
  println!("Breaking news~! {}", item.summary());
}

pub fn run4 () {
  let article = NewsArticle {
    headline: String::from("Penguins win the Stanley Cup Championship!"),
    location: String::from("Pittsburgh, PA, USA"),
    author: String::from("Iceburgh"),
    content: String::from("The Pittsburgh Penguins once again are the best
    hockey team in the NHL."),
  };

  println!("New article available! {}", article.summary());
  notify(article);
  // notify("AND ADDITIONAL");

  let article = WeatherForecast {
    _high_temp: 32.0,
    _low_temp: 11.5,
    _chance_of_precipitation: 0.5,
    author: String::from("NBC"),
  };

  println!("Forecast! {}", article.summary())
}