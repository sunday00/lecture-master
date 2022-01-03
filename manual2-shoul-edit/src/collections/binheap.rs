use std::collections::BinaryHeap;

pub fn reminder(_: String) {
  fn show_reminder(input: &BinaryHeap<i32>) -> Vec<i32> {
    let mut v = vec![];

    for n in input {
      v.push(*n)
    }

    v
  }

  let nn = vec![0, 5, 10, 15, 20, 25, 30];
  let mut heap = BinaryHeap::new();

  for n in nn {
    heap.push(n);
  }

  while let Some(n) = heap.pop() {
    println!("{}, {:?}", n, show_reminder(&heap));
  }
}

pub fn important(_: String) {
  let mut jobs = BinaryHeap::new();

  jobs.push((100, "Write back to email from the CEO"));
  jobs.push((80, "Finish the report today"));
  jobs.push((5, "Watch some YouTube"));
  jobs.push((70, "Tell your team members thanks for always working hard"));
  jobs.push((30, "Plan who to hire next for the team"));

  while let Some((a, b)) = jobs.pop() {
    println!("{}, {}", a, b)
  }
}
