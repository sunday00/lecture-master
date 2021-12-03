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

impl Rectangle {
    fn square(size: u16) -> Rectangle {
        Rectangle {
            length: size,
            width: size,
        }
    }
    fn area(&self) -> u16 {
        self.length * self.width
    }
    fn can_hold(&self, other: &Rectangle) -> bool {
        self.length > other.length && self.width > other.width
    }
}

fn use_struct(length: &u16, width: &u16) {
    let length = length.clone();
    let width = width.clone();
    let rect1 = Rectangle { length, width };

    // println!("Rectangle : {:?}", rect1);
    println!("Rectangle : {:#?}", rect1);

    let square1 = Rectangle::square(15);
    println!("Rectangle : {:#?}", square1);

    let rect2 = Rectangle {
        length: 4,
        width: 4,
    };
    let rect3 = Rectangle {
        length: 10,
        width: 20,
    };

    println!();
    println!();
    println!("The Area (struct mode): {} square pixels", rect1.area());
    println!(
        "The Area (struct mode): can hold 2? : {}",
        rect1.can_hold(&rect2)
    );
    println!(
        "The Area (struct mode): can hold 3? : {}",
        rect1.can_hold(&rect3)
    );
    println!();
    println!();
}
