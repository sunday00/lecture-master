use super::util::*;

pub fn run () {
  let mut a = AveragedCollection::new();
  
  a.add(1);
  a.add(3);
  a.add(7);
  a.add(11);
  a.add(21);
  a.add(31);
  a.add(34);

  println!("{}", a.average())
}

struct SelectBox {
  width: u32,
  height: u32, 
  options: Vec<String>,
}

impl Draw for SelectBox{
  fn draw(&self){
    
  }
}

pub fn run2 () {
  let screen = Screen {
    components: vec![
      Box::new(SelectBox {
        width: 75,
        height: 10,
        options: vec![
          String::from("Yes"),
          String::from("Maybe"),
          String::from("No"),
        ],
      }),
      Box::new(Button {
        width: 50,
        height: 10,
        label: String::from("OK")
      }),
    ],
  };

  screen.run();
}