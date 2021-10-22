extern crate greprs;

use std::env;
use std::process;

use greprs::Config;

fn main () {
    let args: Vec<String> = env::args().collect();
    
    let config = Config::new(&args).unwrap_or_else(|err| {
        println!("\n\nErr <parsing config>: {}\n\n", err);
        process::exit(1);
    });

    println!("\nSearching for \x1b[38;5;14m{}\x1b[0m", config.query);
    println!("In file \x1b[38;5;14m{}\x1b[0m\n", config.filename);

    if let Err(e) = greprs::run(config) {
        println!("Application err: {}", e);
        process::exit(1)
    }
}

