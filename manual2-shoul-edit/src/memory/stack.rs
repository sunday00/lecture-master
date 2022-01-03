pub fn run (_: String) {
  let a = "apple";
  let b = &a;
  let c = &b;
  let d = &&&&a;

  println!("{},{},{},{}", a, b, c, d)
}