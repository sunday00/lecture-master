use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if &args[1] == "var" {
        variables_and_type();
    } else if &args[1] == "cond" {
        conditional();
    }
}

fn none_semicolon_means_return_wow() -> u8 {
    1
}

#[allow(unused_must_use)]
fn variables_and_type() {
    let args: Vec<String> = env::args().collect();

    println!("{:?}", args);

    let filename = &args[0];
    let env1 = &args[1];

    println!("{}", filename);
    println!("env1:{}", env1);

    println!("==============================");

    println!("{}", 11_111_156);
    println!("{}", 11_111_156u32);

    println!("{}", 0.3f64 + 0.6f64);

    let tup: (&str, u8, f64, i8, char) = ("aa", 1, 2.0, 3, 'b');

    // let (z, x, c, v, b) = tup;
    let (z, x, ..) = tup;

    println!("{}", tup.4);
    println!("{}, {}", z, x);

    let arr: [u8; 3] = [1, 2, 3];

    println!("{}", arr[1]);

    let returned_value = {
        let x = 0;
        x + 1
    };

    let _maybe_null = {
        let x = 0;
        x + 1;
    };

    println!("{}", returned_value);
    // println!("{}", _maybe_null);  error
    // without semicolon means returning displaying

    // let definitely_returning_value_with_semicolon = {
    //     let x = 0;
    //     // return x + 1;  // not possible
    // };

    let wow = none_semicolon_means_return_wow();
    println!("{}", wow);
}

fn conditional() {
    let args: Vec<String> = env::args().collect();
    let number = if &args.len() == &(3 as usize) { 10 } else { 20 };

    println!("{}", number);

    let mut num = 3;
    while num != 0 {
        println!("{}", num);

        num = num - 1;
    }
    println!("end");

    let fruits = ["apple", "banana", "cherry", "durian"];
    for fruit in fruits.iter() {
        println!("{}", fruit);
    }

    for num in (1..4).rev() {
        println!("{}", num);
    }

    for (k, fruit) in fruits.iter().enumerate() {
        println!("{}, {}", k, fruit);
    }
}
