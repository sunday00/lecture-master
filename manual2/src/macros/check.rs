#[allow(dead_code)]
#[allow(unused_variables)]
pub fn check(_: String) {
  struct Book {}
  enum BookType {
    HardCover,
    SoftCover,
  }

  fn get_book(book: &Book) -> Option<String> {
    todo!()
    // === unimplemented!()
    // skip like pass keyword of python
    // just only skip logic not in-out type.
    // DO NOT skip type definition as trust todo!()
  }

  fn delete_book(book: Book) -> Result<(), String> {
    todo!()
  }

  fn check_book_type(book_type: &BookType) {
    match book_type {
      BookType::HardCover => println!("It's hard"),
      BookType::SoftCover => println!("It's soft"),
    }
  }

  let book_type = BookType::HardCover;
  check_book_type(&book_type);
}