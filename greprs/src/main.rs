extern crate greprs;

use std::env;
use std::process;

use greprs::Config;

fn main () {
    let args: Vec<String> = env::args().collect();
    
    if args[1] == "test=1" {
        greprs::test(args);
        process::exit(0)
    } else if args[1] == "test=2" {
      
    }

    let config = Config::new(&args).unwrap_or_else(|err| {
        eprintln!("Err <parsing config>: \x1b[38;5;9m{}\x1b[0m", err);
        process::exit(1);
    });

    println!("\nSearching for \x1b[38;5;14m{}\x1b[0m", config.query);
    println!("In file \x1b[38;5;14m{}\x1b[0m\n", config.filename);

    if let Err(e) = greprs::run(config) {
        eprintln!("Application err: {}", e);
        process::exit(1)
    }
}
