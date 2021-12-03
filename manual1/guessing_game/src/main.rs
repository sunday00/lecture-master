extern crate rand;

use rand::Rng;
use std::cmp::Ordering;
use std::io;

fn main() {
    println!("{}", str_to_color("\n\n====Guess number====\n\n", 118));

    let secret_number = rand::thread_rng().gen_range(1..101);
    // println!("The secret number is: {}", secret_number);
    let mut score = 100;

    loop {
        println!("{}", str_to_color("\n\ninput guessed number", 14));
        let mut guess = String::new();
        // let guess : constant
        // let mut guess : variable
        io::stdin()
            .read_line(&mut guess)
            .expect("failed to read line");
        // let guess: u32 = guess.trim().parse().expect("can't parse number");
        let guess: i8 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                let msg = format!("input should number. Your input is '{}'", guess.trim());
                println!("{}", str_to_color(&msg, 9));
                continue;
            }
        };
        println!("you guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Equal => {
                let msg = format!("finish score is {}", score);
                println!("{}", str_to_color(&msg, 10));
                println!("{}", str_to_color("\n\n====GREAT, BYE~====\n\n", 10));
                break;
            }
            _ => {
                score -= 10;
                match score.cmp(&0) {
                    Ordering::Greater => {}
                    _ => {
                        let msg = format!("Secret number is {}", secret_number);
                        println!("{}", str_to_color(&msg, 10));
                        println!("{}", str_to_color("\n\n====GAME OVER, BYE~====\n\n", 202));
                        break;
                    }
                }

                match guess.cmp(&secret_number) {
                    Ordering::Less => match guess.cmp(&0) {
                        Ordering::Less => {
                            println!("{}", str_to_color("input should bigger then 0", 202));
                        }
                        _ => match (secret_number - guess).cmp(&30) {
                            Ordering::Greater => {
                                println!("{}", str_to_color("bigger then you guessed", 11));
                                println!("{}", str_to_color("hint : gap is more then 30", 8));
                            }
                            _ => match (secret_number - guess).cmp(&5) {
                                Ordering::Less => {
                                    println!("{}", str_to_color("bigger then you guessed", 11));
                                    println!("{}", str_to_color("hint : Almost close!!", 2));
                                }
                                _ => println!("{}", str_to_color("bigger then you guessed", 11)),
                            },
                        },
                    },
                    Ordering::Greater => match guess.cmp(&100) {
                        Ordering::Greater => {
                            println!("{}", str_to_color("input should smaller then 100", 202));
                        }
                        _ => match (guess - secret_number).cmp(&30) {
                            Ordering::Greater => {
                                println!("{}", str_to_color("bigger then you guessed", 11));
                                println!("{}", str_to_color("hint : gap is more then 30", 8));
                            }
                            _ => match (guess - secret_number).cmp(&5) {
                                Ordering::Less => {
                                    println!("{}", str_to_color("smaller then you guessed", 11));
                                    println!("{}", str_to_color("hint : Almost close!!", 2));
                                }
                                _ => println!("{}", str_to_color("smaller then you guessed", 11)),
                            },
                        },
                    },
                    _ => {}
                }
            }
        }
    }
}

fn str_to_color(msg: &str, color_code: u8) -> String {
    return format!("\x1b[38;5;{}m{}\x1b[0m", color_code, msg);
}
