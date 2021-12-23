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