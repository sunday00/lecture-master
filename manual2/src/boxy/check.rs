pub fn check(_: String) {
  fn garbage_collector<T>(_: T){}

  let my_number = 1;
  garbage_collector(my_number);
  println!("{}", my_number); // primitive can be not collected

  let my_box = Box::new(1);
  garbage_collector(my_box);
  // println!("{}", my_box); // can't to this. box is not copy, moved into collector

  let my_box = Box::new(1);
  garbage_collector(my_box.clone());
  println!("{}", my_box);

  let my_box = Box::new(7);
  println!("{:?}", *my_box);
}


pub fn make_linked_list(_: String) {
  struct List {
    item: Option<Box<List>>,
  }

  impl List {
    fn new() -> List {
      List {
        item: Some(Box::new( List{item:None} ))
      }
    }
  }

  let mut l = List::new();
  let m = List::new();
  
  l.item = Some(Box::new(m));
}