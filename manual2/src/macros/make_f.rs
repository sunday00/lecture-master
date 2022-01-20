pub fn one(_: String){
  macro_rules! make_a_f {
    ($name:ident, $($i:tt), *) => {
      fn $name() {
        println!("{}", stringify!($($i), *));
      }
    };
  }

  make_a_f!(greet, hello, sunday);
  greet();
}
