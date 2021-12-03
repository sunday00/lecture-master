extern crate sunday00_profiles as profiles;

pub use profiles::kinds;
pub use profiles::utils;

fn main() {
    println!( "{:?}", profiles::add_one(3) );

    println!("{:?}", utils::mix( kinds::PrimaryColor::Blue, kinds::PrimaryColor::Red ) );
}
