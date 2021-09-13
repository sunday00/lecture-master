use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let length1 = &args[1].parse::<u16>().unwrap();
    let width1 = &args[2].parse::<u16>().unwrap();

    println!();
    println!();
    println!("The Area : {} square pixels", area(length1, width1));
    println!();
    println!();
}

fn area(length: &u16, width: &u16) -> u16 {
    length * width
}
