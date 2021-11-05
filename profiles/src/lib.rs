//!
//! `This` is what I want explain
//! 

/// Adds one to the number given.
///
/// # Examples
///
/// ```
/// let five = 5;
///
/// assert_eq!(6, profiles::add_one(5));
/// ```
pub fn add_one(x: i32) -> i32 {
  x + 1
}

pub mod kinds {
  /// primary colors according to the RYB color model.
  #[derive(Debug)]
  pub enum PrimaryColor {
    Red, Yellow, Blue
  }

  /// secondary colors according to the RYB color model.
  #[derive(Debug)]
  pub enum SecondaryColor {
    Orange, Green, Purple, 
  }

}

pub mod utils {
  use crate::kinds::*;

  pub fn mix(_c1: PrimaryColor, _c2: PrimaryColor) -> SecondaryColor {
    SecondaryColor::Orange
  }
}