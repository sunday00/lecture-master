extern crate common_known;

use common_known::*;
use std::env;

fn env(i: u8) -> String {
    let args: Vec<String> = env::args().collect();
    if args.len() < i as usize + 1 {
        return String::new();
    }

    String::from(args[i as usize].clone())
}

fn main() {
    if env(1) == "types" {
        types::run(env(2), env(3));
    } else if env(1) == "printing" {
        printing::run(env(2), env(3));
    } else if env(1) == "memory" {
        memory::run(env(2), env(3));
    } else if env(1) == "string" {
        strings::run(env(2), env(3));
    } else if env(1) == "variable" {
        variable::run(env(2), env(3));
    } else if env(1) == "functions" {
        functions::run(env(2), env(3));
    } else if env(1) == "collections" {
        collections::run(env(2), env(3));
    } else if env(1) == "control" {
        control::run(env(2), env(3));
    } else if env(1) == "struction" {
        struction::run(env(2), env(3));
    } else if env(1) == "enums" {
        enums::run(env(2), env(3));
    }
}
