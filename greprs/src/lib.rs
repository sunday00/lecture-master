use std::error::Error;
use std::fs::File;
use std::io::prelude::*;

pub struct Config {
  pub query: String,
  pub filename: String,
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
  
      Ok(Config { query, filename })
  }    
}

pub fn run (config: Config) -> Result<(), Box<dyn Error>> {
  let mut f = File::open(&config.filename)? ;
      // .expect("file not found");

  let mut contents = String::new();
  f.read_to_string(&mut contents)? ;
      // .expect("Can't read file.");

  let results = search(&config.query, &contents);
  if results.len() > 0 {
    for line in results {
      println!("{}", line);
    }
    // println!("With text:\n{}\n", contents);
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

  for line in contents.lines(){
    if line.contains(query){
      let colored_query = format!(
        "\x1b[38;5;10m{}\x1b[0m", query
      );
    
      let colored_line = line.replace(query, &colored_query);

      results.push(colored_line);
    }
  }

  results
}

#[cfg(test)]
mod test {
  use super::*;

  #[test]
  fn one_result(){
    let query = "duct";
    let contents = "\
Rust:
safe, fast, productive.
Pick three.";

    assert_eq!(
      vec!["safe, fast, productive."], 
      search(query, contents)
    )
  }
}


