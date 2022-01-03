pub fn tuple_type(_: String){
  let random_t = ("strings", 8, vec![4, 44, 6], 1.3, (1, 2, 3), 'c');

  println!("{:?}", random_t.2);
}

pub fn spread (_: String) {
  let _v = vec![1, 2, 3];
  let arr = [10, 20, 30];
  let t = (100, 200, 300);
  
  // let [a, s, d] = v;
  let [z, x, c] = arr;
  let (q, w, e) = t;
  
  println!("{}, {}, {}, {}, {}, {}, ", q, w, e, z, x, c);

}
