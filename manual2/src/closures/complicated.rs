use std::collections::HashMap;

pub fn make_hash_map(_:String){
  let some_numbers = vec![0, 1, 2, 3, 4, 5];
  let some_words = vec!["zero", "one", "two", "three", "four", "five"];

  let number_word_hashmap: HashMap<_,_> = some_numbers.clone()
    .into_iter().zip(some_words.clone().into_iter())
    .collect();

  println!("{:?}", number_word_hashmap);

  some_numbers.iter().for_each(|_| {
    println!("time");
  })
}

pub fn divide_ns(_: String) {
  let numbers_together = "140399923481800622623218009598281";

  for(i, n) in numbers_together.char_indices() {
    match (i % 3, n) {
      (0..=1, n)=> print!("{}", n),
      _ => println!("{}", n),
    }
  }
}

pub fn filter(_: String) {
  let months = vec!["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let filtered_month = months.into_iter().filter(|m| m.len() < 5)
    .filter(|m| m.contains("u")).collect::<Vec<&str>>();
  
    println!("{:?}", filtered_month);
}

pub fn ceos(_: String) {
  struct Company {
    name: String,
    ceo: Option<String>,
  }
  
  impl Company {
    fn new(name: &str, ceo: &str) -> Self {
      let ceo = match ceo {
        "" => None,
        ceo => Some(ceo.to_string()),
      };
      Self {
        name: name.to_string(),
        ceo
      }
    }
  
    fn get_ceo(&self) -> Option<String> {
      self.ceo.clone()
    }
  }

  let company_vec = vec![
    Company::new("Umbrella Corporation", "Unknown"),
    Company::new("Ovintiv", "Doug Suttles"),
    Company::new("The Red-Headed League", ""),
    Company::new("Stark Enterprises", ""),
  ];

  let mut results_v = vec![];

  let all_the_ceos = company_vec.iter().filter_map(|c| c.get_ceo())
    .collect::<Vec<String>>();

  println!("{:?}", all_the_ceos);

  company_vec.iter().for_each(|c| {
    results_v.push(c.get_ceo().ok_or_else(|| {
      format!("No CEO in {}", c.name)
    }))
  });

  for r in results_v {
    println!("{:?}", r);
  }
}

pub fn parserble(_: String){
  let user_input = vec!["8.9", "Nine point nine five", "8.0", "7.6", "eleventy-twelve"];

  let ns: Vec<f32> = user_input
    .into_iter().filter_map(|i| i.parse::<f32>().ok()).collect();

  println!("{:?}", ns);
}

pub fn andthen(_: String) {
  let new_v = vec![8,9,0];
  let number_to_add = 5;
  let mut empty_v = vec![];

  for i in 0..5 {
    empty_v.push(
      new_v.get(i).and_then(|n| Some(n + 1)).and_then(|n| Some(n + number_to_add))
    );
  }

  println!("{:?}", empty_v);

  println!("{:?}", Some(1).and::<u8>(None).and::<u8>(Some(1)));
  println!("{:?}", Some(1).and::<u8>(Some(2)).and::<u8>(Some(1)));
  println!("{:?}", Some(1).and::<u8>(Some(2)).and::<u8>(None));
}

pub fn chr_find(_: String) {
  fn char_exists ( char_vec: &Vec<char>, c: char ) {
    println!("Char_vec has {} : {}", c, char_vec.iter().any(|&char| char == c));
  }

  let char_vec = ('a'..'働').collect::<Vec<char>>();

  char_exists(&char_vec, 'i');
  char_exists(&char_vec, '방');
  char_exists(&char_vec, '恳');

  let smaller_v = ('A'..'z').collect::<Vec<char>>();
  println!("all alphabetic? {}", smaller_v.iter().all(|&x| x.is_alphabetic()));
  println!("all lett then the character 햏 : {}", smaller_v.iter().all(|&x| x < '햏'));
  
  let mut big_vec = vec![6; 1000];
  big_vec.push(5);

  let mut iterator = big_vec.iter().rev();
  println!("{:?}", iterator.next());

  big_vec.push(5);
  println!("{:?}", big_vec.iter().rev().any(|&n| n == 5 ))
}

pub fn calc_find(_:String) {  
  let nums: Vec<u8> = (10..101).step_by(10).collect();
  println!("{:?}", nums.iter().find(|&n| n % 3 == 0));
  println!("{:?}", nums.iter().find(|&n| n * 2 == 30));
  println!("{:?}", nums.iter().position(|&n| n % 3 == 0));
  println!("{:?}", nums.iter().position(|&n| n * 2 == 0));

} 