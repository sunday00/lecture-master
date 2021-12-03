// enum List {
//   Cons(i32, Box<List>),
//   Nil
// }

// use List::{Cons, Nil};

// pub fn run1 () {
//   let a = Cons(   5, Box::new(  Cons( 10, Box::new(Nil) )  )   );
//   let b = Cons( 3, Box::new(a) );
//   let c = Cons( 4, Box::new(a) );


// }
use std::rc::Rc;

enum List {
  Cons(i32, Rc<List>),
  Nil
}
  
use List::{Cons, Nil};
  
pub fn run1 () {
  let a = Rc::new(   Cons(5, Rc::new(  Cons( 10, Rc::new(Nil) )  ))   );
  println!("count after creating a = {}", Rc::strong_count(&a));

  let b = Cons( 3, Rc::clone(&a) );
  println!("count after creating b = {}", Rc::strong_count(&a));

  {
    let c = Cons( 4, Rc::clone(&a) );
    println!("count after creating c = {}", Rc::strong_count(&a));
  }

  println!("count after out scope c = {}", Rc::strong_count(&a));
}