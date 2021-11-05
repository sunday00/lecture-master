extern crate heap_and_box;

#[derive(Debug)]
enum List {
    Cons(i32, Box<List>),
    Nil,
}

use List::{Cons, Nil};
fn main() {
    let list = Cons(1, 
        Box::new(Cons(2, 
            Box::new(Cons(3, 
                Box::new(Nil)
            ))
        ))
    );

    println!("{:?}", list);

    heap_and_box::reverse_ref::m1::run1();
    heap_and_box::reverse_ref::m1::run2();
    heap_and_box::reverse_ref::m2::run1();
    heap_and_box::reverse_ref::m2::run2();
    heap_and_box::reverse_ref::m3::run1();
}


