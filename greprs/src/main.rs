use std::env;
use std::fs::File;
use std::io::prelude::*;

fn main () {
    let args: Vec<String> = env::args().collect();
    
    // let query = &args[1];
    // let filename = &args[2];
    let (query, filename) = parse_config(&args);

    println!("Searching for \x1b[38;5;14m{}\x1b[0m", query);
    println!("In file \x1b[38;5;14m{}\x1b[0m", filename);

    let mut f = File::open(filename).expect("file not found");

    let mut contents = String::new();
    f.read_to_string(&mut contents).expect("Can't read file.");

    println!("With text:\n{}", contents);
}

fn parse_config(args: &[String]) -> (&str, &str) {
    ( &args[1], &args[2] )
}