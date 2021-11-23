pub fn run () {
  let mut num:u8 = 5;
  let r1 = &num as *const u8;
  let r2 = &mut num as *mut u8;

  unsafe {
    println!("r1 : {}", *r1);
    println!("r2 : {}", *r2) ;
  }
}

unsafe fn danger() {

}

pub fn run2 () {
  unsafe {
    danger()
  }
}

pub fn run3 () {
  let mut v = vec![1,2,3,4,5,6,];
  let r = &mut v[..];

  let (a,b) = r.split_at_mut(3);
  
  println!("{:?}", a);
  println!("{:?}", b);
}

/*
fn split_by_n_f (slice: &mut [u8], mid: usize) -> (&mut [u8], &mut [u8]) {
  let len = slice.len();

  assert!(mid <= len);

  (&mut slice[..mid], &mut slice[mid..])
}
*/

use std::slice;

fn split_by_n (slice: &mut [u8], mid: usize) -> (&mut [u8], &mut [u8]) {
  let len = slice.len();
  let ptr = slice.as_mut_ptr();

  println!("{:?}", ptr);

  assert!(mid <= len);

  unsafe{
    (
      slice::from_raw_parts_mut(ptr, mid),
      slice::from_raw_parts_mut(ptr.offset(mid as isize), len - mid)
    )
  }
}

pub fn run4 () {
  let mut v = vec![1,2,3,4,5,6,];
  let r = &mut v[..];

  let (a,b) = split_by_n(r, 3);
  
  println!("{:?}", a);
  println!("{:?}", b);
}

pub fn run5 () {
  let address = 0x012345usize;
  let r = address as *mut i8;

  let slice = unsafe {
    slice::from_raw_parts_mut(r, 10000)
  };
}

extern "C" {
  fn abs(input: i8) -> u8;
}

pub fn run6 () {
  unsafe {
    println!("{}", abs(-3));
  }
}

#[no_mangle]
pub extern "C" fn call_on_c() {
  println!("Hello, C.. This function from Rust!");
}

use std::{thread, time};

static HELLO_GLOBAL_VARIABLE : &str = "hello";

static mut COUNTER: u8 = 0;

fn add_to_counter(inc: u8){
  unsafe {
    COUNTER += inc;
  }
}

pub fn run7(){
  println!("{}", HELLO_GLOBAL_VARIABLE);

  add_to_counter(3);

  unsafe {
    println!("NOW : {}", COUNTER)
  }


  loop {
    let seconds = time::Duration::from_secs(1);
    thread::sleep(seconds);
    unsafe{
      add_to_counter(1);
      println!("NOW: {}", COUNTER);
      
      if COUNTER >= 20 {
        break;
      }
    }

  }

}

unsafe trait Foo {}

unsafe impl Foo for u8 {
  
}