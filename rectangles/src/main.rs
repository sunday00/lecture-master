use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let mode = &args[1];
    let length1 = &args[2].parse::<u16>().unwrap();
    let width1 = &args[3].parse::<u16>().unwrap();

    if mode == "fun" {
        use_func(length1, width1);
    } else if mode == "tup" {
        use_tuple(length1, width1);
    } else if mode == "struct" {
        use_struct(length1, width1);
    }
}

fn use_func(length1: &u16, width1: &u16) {
    println!();
    println!();
    println!(
        "The Area (function mode): {} square pixels",
        area(length1, width1)
    );
    println!();
    println!();
}

fn area(length: &u16, width: &u16) -> u16 {
    length * width
}

fn use_tuple(length1: &u16, width1: &u16) {
    println!();
    println!();
    println!(
        "The Area (tuple mode): {} square pixels",
        area2((length1, width1))
    );
    println!();
    println!();
}

fn area2(rec_tup: (&u16, &u16)) -> u16 {
    rec_tup.0 * rec_tup.1
}

#[derive(Debug)]
struct Rectangle {
    length: u16,
    width: u16,
}

fn use_struct(length: &u16, width: &u16) {
    let length = length.clone();
    let width = width.clone();
    let rect1 = Rectangle { length, width };

    // println!("Rectangle : {:?}", rect1);
    println!("Rectangle : {:#?}", rect1);

    println!();
    println!();
    println!("The Area (struct mode): {} square pixels", area3(&rect1));
    println!();
    println!();
}

fn area3(rectangle: &Rectangle) -> u16 {
    rectangle.length * rectangle.width
}
