pub struct Context<'s>(&'s str);

impl <'s>Context<'s> {
  pub fn new(s: &str) -> Context {
    Context(s)
  }
}

// pub struct Parser<'a> {
//   context: &'a Context<'a>,
// }

pub struct Parser<'c, 's: 'c> {
  pub context: &'c Context<'s>,
}

impl <'c, 's> Parser<'c, 's> {
  fn parse(&self) -> Result<(), &'s str> {
  // pub fn parse<'a>(&'a self) -> Result<(), &'a str> {
    Err(&self.context.0[1..])
  }
}

pub fn parse_context(context: Context) -> Result<(), &str> {
  Parser { context: &context }.parse()
}
