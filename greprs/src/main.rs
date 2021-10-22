use std::env;
use std::process;
use std::fs::File;
use std::io::prelude::*;

fn main () {
    let args: Vec<String> = env::args().collect();
    
    let config = Config::new(&args).unwrap_or_else(|err| {
        println!("Err <parsing config>: {}", err);
        process::exit(1);
    });

    println!("Searching for \x1b[38;5;14m{}\x1b[0m", config.query);
    println!("In file \x1b[38;5;14m{}\x1b[0m", config.filename);

    let mut f = File::open(config.filename).expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents).expect("Can't read file.");

    println!("With text:\n{}", contents);
}

struct Config {
    query: String,
    filename: String,
}

impl Config {
    fn new(args: &[String]) -> Result<Config, &'static str> {
        if args.len() < 3 {
            return Err(
                "\n\n
                The number of arguments is not enough. Expecting string you're looking for and filename.
                ex>>> cargo run ABCD filename.txt ;
                \n\n"
            )
        }

        let query = args[1].clone();
        let filename = args[2].clone();
    
        Ok(Config { query, filename })
    }    
}

