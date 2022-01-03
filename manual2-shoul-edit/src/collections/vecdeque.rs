use std::collections::VecDeque;

pub fn remove(_: String) {
  let mut v = VecDeque::from(vec![0;600_000]);
  for _ in 0..600_000 {
    v.pop_front();
  }
}

pub fn todo(_: String) {
  fn check_remain(i: &VecDeque<(&str, bool)>) {
    for item in i {
      if item.1 == false {
        println!("TODO :: {}", item.0)
      }
    }
  }

  fn done(i: &mut VecDeque<(&str, bool)>) {
    let mut task_complete = i.pop_back().unwrap();
    task_complete.1 = true;
    i.push_front(task_complete);
  }

  let mut v = VecDeque::from(vec![
    ("send email to customer", false),
    ("add new product to list", false),
    ("phone Loki back", false)
  ]);

  done(&mut v);
  done(&mut v);

  check_remain(&v);

  println!("{:?}", v);
}