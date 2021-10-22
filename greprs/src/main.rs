use std::env;
use std::process;
use std::fs::File;
use std::io::prelude::*;
use std::error::Error;

fn main () {
    let args: Vec<String> = env::args().collect();
    
    let config = Config::new(&args).unwrap_or_else(|err| {
        println!("\n\nErr <parsing config>: {}\n\n", err);
        process::exit(1);
    });

    println!("\nSearching for \x1b[38;5;14m{}\x1b[0m", config.query);
    println!("In file \x1b[38;5;14m{}\x1b[0m\n", config.filename);

    run(config);
}

struct Config {
    query: String,
    filename: String,
}

impl Config {
    fn new(args: &[String]) -> Result<Config, &'static str> {
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

fn run (config: Config) -> Result<(), Box<Error>> {
    let mut f = File::open(config.filename)? ;
        // .expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents)? ;
        // .expect("Can't read file.");

    println!("With text:\n{}\n", contents);

    Ok(())
}