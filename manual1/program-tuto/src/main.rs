use std::env;
mod base;
mod datas;

fn main() {
    let args: Vec<String> = env::args().collect();
    if &args[1] == "var" {
        base::variables_and_type();
    } else if &args[1] == "cond" {
        base::conditional();
    } else if &args[1] == "owner" {
        base::owner();
    } else if &args[1] == "refer" {
        base::refer();
    } else if &args[1] == "slice" {
        base::what_is_slice();
    } else if &args[1] == "struct" {
        datas::what_is_struct();
    }
}
