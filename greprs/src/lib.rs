use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use regex::*;

pub struct Config {
  pub query: String,
  pub filename: String,
  pub case_sensitive: bool,
}

impl Config {
  pub fn new(args: &[String]) -> Result<Config, &'static str> {
      if args.len() < 3 {
          return Err(
              "
              The number of arguments is not enough. Expecting string you're looking for and filename.
              ex>>> cargo run ABCD filename.txt ;
              "
          )
      }

      let query = args[1].clone();
      let filename = args[2].clone();

      // let case_sensitive = std::env::var("CASE_SENSITIVE").is_err();
      let mut case_sensitive: bool = true;

      if args.len() > 3 {
        for i in 3..args.len() {
          let splited: Vec<&str> = args[i].split("=").collect();
          match splited[0] {
            "--ignore-case" => {
              case_sensitive = splited[1] != "1";
            },
            _ => {}
          }
        }
      }
  
      Ok(Config { query, filename, case_sensitive })
  }    
}

pub fn run (config: Config) -> Result<(), Box<dyn Error>> {
  let mut f = File::open(&config.filename)? ;
      // .expect("file not found");

  let mut contents = String::new();
  f.read_to_string(&mut contents)? ;
      // .expect("Can't read file.");

  let results = if config.case_sensitive {
    search(&config.query, &contents)
  } else {
    search_case_insensitive(&config.query, &contents)
  };

  if results.len() > 0 {
    for line in &results {
      println!("{}", line);
    }
    // println!("With text:\n{}\n", contents);

    println!("\n=== total : {} times found ===", results.len());
  } else {
    println!(
      "\x1b[38;5;208mThe string \x1b[38;5;14m{} \x1b[38;5;208mis not here in file \x1b[38;5;14m{}\x1b[38;5;208m.\x1b[0m",
      &config.query, config.filename
    );
  }

  println!("\n\n");
  Ok(())
}

pub fn search<'a>(query: &str, contents: &'a str) -> Vec<String> {
  let mut results = Vec::new();

  for (i, line) in contents.lines().enumerate() {
    if line.contains(query){
      let colored_query = format!(
        "\x1b[38;5;10m{}\x1b[0m", query
      );
    
      let colored_line = format!( "{} >>> {}", i + 1, line.replace(query, &colored_query) );

      results.push(colored_line);
    }
  }

  results
}

pub fn search_case_insensitive<'a>(query: &str, contents: &'a str) -> Vec<String> {
  let lo_query = query.to_lowercase();
  let mut results = Vec::new();

  for (i, line) in contents.lines().enumerate() {
    if line.to_lowercase().contains(&lo_query){
      
      let pattern = format!("(?i){}", &lo_query);
      let re = Regex::new(&pattern).unwrap();
      
      let colored_query = format!(
        "\x1b[38;5;10m{}\x1b[0m", &query
      );
      
      let colored_line = format!( "{} >>> {}", i + 1, re.replace_all(&line, &colored_query) );

      results.push(colored_line);
    }
  }

  results
}

pub mod scope;

pub fn test (args: Vec<String>) {
  scope::main(args);
}


#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn case_sensitive(){
    let query = "duct";
    let contents = "\
Rust:
safe, fast, productive.
Pick three.
Duct tape.";

    assert_eq!(
      vec!["2 >>> safe, fast, pro\u{1b}[38;5;10mduct\u{1b}[0mive."], 
      search(query, contents)
    )
  }

  #[test]
  fn case_insensitive(){
    let query = "rUsT";
    let contents = "\
Rust:
safe, fast, productive.
Pick three.
Trust me.";

    assert_eq!(
      vec!["1 >>> \u{1b}[38;5;10mrUsT\u{1b}[0m:", "4 >>> T\u{1b}[38;5;10mrUsT\u{1b}[0m me."], 
      search_case_insensitive(query, contents)
    )
  }
}


