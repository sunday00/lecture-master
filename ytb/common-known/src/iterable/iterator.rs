pub fn looping(_: String) {
  let mut v0 = vec![1, 2, 3];
  let va: Vec<u8> = v0.iter().map(|x| x + 1).collect();
  let vb: Vec<u8> = v0.clone().into_iter().map(|x| x + 1).collect();

  v0.iter_mut().for_each(|x| *x += 1);

  // iter: just ref and return new iterable
  // into_iter: mutate original then original gone (aka: moved)
    // so, when I need to keep original, clone original
  // into_mut: mutate original itself. keep it!

  println!("{:?}", va);
  println!("{:?}", vb);
  println!("{:?}", v0);
}

pub fn call_next(_: String){
  let v = vec!['a', 'b', '거', '柳'];
  let mut v_i = v.iter();

  println!("{:?}", v_i.next());
  println!("{:?}", v_i.next());
  println!("{:?}", v_i.next());
  println!("{:?}", v_i.next());
  println!("{:?}", v_i.next());

  let v = vec![0,1,2,3,4,5,6,7,8,9,10];
  println!("{:?}", v.clone().into_iter().skip(3).collect::<Vec<u8>>());
  println!("{:?}", v.clone().into_iter().skip(3).take(4).collect::<Vec<u8>>());
}

pub fn library(_: String) {

  #[derive(Debug, Clone)]
  struct Library {
    library_type: LibraryType,
    books: Vec<String>,
  }

  #[derive(Debug, Clone)]
  enum LibraryType {
    City,
    _Country,
  }

  impl Library {
    fn add_book (&mut self, book: &str) {
      self.books.push(book.to_string());
    }

    fn new() -> Self {
      Self {
        library_type: LibraryType::City,
        books: Vec::new(),
      }
    }
  }

  impl Iterator for Library {
    type Item = String; //associated type

    fn next(&mut self) -> Option<Self::Item> {
      match self.books.pop(){
        Some(book) => Some(book + " is found!"),
        None => None,
      }
    }
  }

  let mut my_lib = Library::new();
  my_lib.add_book("tiger");
  my_lib.add_book("Spider Man");
  my_lib.add_book("Gun, Bacteria, Steal");
  my_lib.add_book("솔아솔아 푸르른 솔아");
  my_lib.add_book("HELLO");
  my_lib.add_book("吾輩は猫である");

  println!("{:?}", my_lib);

  // for i in my_lib.clone() {
  //   println!("{}", i);
  // }

  for _ in my_lib.clone() {
    println!("{:?}", my_lib.next());
  }
}

pub fn impl_iter (_: String) {
  struct Alternate {
    state: u8
  }

  impl Iterator for Alternate {
    type Item = u8;

    fn next(&mut self) -> Option<u8> {
      let v = self.state;
      self.state = self.state + 1;

      if v % 2 == 0 {
        Some(v)
      } else {
        None
      }
    }
  }

  let mut s = Alternate{ state: 8 };
  println!("{:?}", s.next());
  println!("{:?}", s.next());
  println!("{:?}", s.next());
  println!("{:?}", s.next());
  println!("{:?}", s.next());
  println!("{:?}", s.next());
}
