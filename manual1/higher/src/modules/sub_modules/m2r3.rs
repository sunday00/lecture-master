pub trait Red {}

pub struct Ball<'a> {
  pub diameter: &'a i32,
}

impl <'a>Red for Ball<'a> {}

