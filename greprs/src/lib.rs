use std::error::Error;
use std::fs::File;
use std::io::prelude::*;
use regex::*;
use std::env;
use std::process;

pub struct Config {
  pub query: String,
  pub filename: String,
  pub case_sensitive: bool,
}

impl Config {
  pub fn new(mut args: env::Args) -> Result<Config, &'static str> {
    if args.len() < 3 {
      return Err(
        "
        The number of arguments is not enough. Expecting string you're looking for and filename.
        ex>>> cargo run ABCD filename.txt ;
        "
      )
    }
    
    args.next();

    // let query = args[1].clone();
    // let filename = args[2].clone();
    let query = match args.next() {
      Some(arg) => arg,
      None => return Err("Please input query string"),
    };

    match query.as_str() {
      "test=1" => {test1(args.collect()); process::exit(0)},
      "test=2" => {test2(args.collect()); process::exit(0)},
      "test=3" => {test3(args.collect()); process::exit(0)},
      "test=4" => {test4(args.collect()); process::exit(0)},
      _ => {},
    }

    let filename = match args.next() {
      Some(arg) => arg,
      None => return Err("Please input filename"),
    };

    // let case_sensitive = std::env::var("CASE_SENSITIVE").is_err();
    let mut case_sensitive: bool = true;

    for _ in 0..args.len() {
      match args.next() {
        Some(arg) => {
          let splited: Vec<&str> = arg.split("=").collect();
          match splited[0] {
            "--ignore-case" => {
              case_sensitive = splited[1] != "1";
            },
            _ => {}
          }
        },

        None => {}
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
  // let mut results = Vec::new();

  // for (i, line) in contents.lines().enumerate() {
  //   if line.contains(query){
  //     let colored_query = format!(
  //       "\x1b[38;5;10m{}\x1b[0m", query
  //     );
    
  //     let colored_line = format!( "{} >>> {}", i + 1, line.replace(query, &colored_query) );

  //     results.push(colored_line);
  //   }
  // }

  // let colored_query = format!("\x1b[38;5;10m{}\x1b[0m", query);
  // contents.lines()
  //   .enumerate()
  //   .map(|(i, line)| format!( "{} >>> {}", i, line.replace(query, &colored_query) ))
  //   .filter(|line| line.contains(query))
  //   .collect()

  let colored_query = format!("\x1b[38;5;10m{}\x1b[0m", query);
  contents.lines()
    .enumerate()
    .filter(|(_, line)| line.contains(query))
    .map(|(i, line)| format!( "{} >>> {}", i, line.replace(query, &colored_query) ))
    .collect()

  // results
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
pub mod iterator;

pub fn test1 (args: Vec<String>) {
  scope::main(args);
}

pub fn test2 (args: Vec<String>) {
  scope::main2(args);
}

pub fn test3 (args: Vec<String>) {
  iterator::main(args);
}

pub fn test4 (args: Vec<String>) {
  iterator::main2(args);
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


