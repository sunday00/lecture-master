pub fn comp (_:String) {
  let n = 9;
  let reference = &n;

  // println!("{}", n == reference)
  println!("{}", n == *reference);

  struct Item {
    number: u8
  }

  let item = Item{ number: 8 };
  let r = &item;
  println!("{}", 8 == r.number)

}

pub fn aut(_:String) {
  struct Item { number: u8 }

  impl Item {
    fn compare_number(&self, other: u8){
      println!("Are {} and {} eaqul? : {}",
       self.number, other, other == self.number)
    }
  }

  let i = Item{ number : 7 };

  let ref_i = &i;
  let rr_i = &ref_i;

  i.compare_number(7);
  ref_i.compare_number(7);
  rr_i.compare_number(7);

  i.compare_number(ref_i.number);
}
