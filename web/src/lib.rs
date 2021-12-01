use std::thread;
use std::sync::mpsc;
use std::sync::Arc;
use std::sync::Mutex;

trait FnBox {
  fn call_box(self: Box<Self>);
}

impl<F: FnOnce()> FnBox for F {
  fn call_box(self: Box<F>){
    (*self)()
  }
}

type Job = Box<dyn FnBox + Send + 'static>;

struct Worker {
  id: usize,
  thread: thread::JoinHandle<()>,
}

impl Worker {
  fn new(id: usize, receiver: Arc<Mutex<mpsc::Receiver<Job>>>) -> Worker {
    let thread = thread::spawn(move || {
      loop {
        let job = receiver.lock().unwrap().recv().unwrap();
        println!("Worker {} got a job; executing.", id);
        // (*job)();
        job.call_box();
      }
    });

    Worker {
      id, thread
    }
  }
}

pub struct ThreadPool{
  // threads: Vec<thread::JoinHandle<()>>,
  workers: Vec<Worker>,
  sender: mpsc::Sender<Job>
}

impl ThreadPool {
  /// 새 스레드풀 생성
  ///
  /// size 는 풀 안의 스레드 개수입니다.
  ///
  /// # Panics
  ///
  pub fn new(size: usize) -> ThreadPool{
    assert!(size > 0);

    let (sender, receiver) = mpsc::channel();
    let receiver = Arc::new(Mutex::new(receiver));

    // let mut threads = Vec::with_capacity(size);
    let mut workers = Vec::with_capacity(size);

    for id in 0..size {
      workers.push(Worker::new(id, Arc::clone(&receiver)));
    }

    ThreadPool {
      // threads
      workers,
      sender
    }
  }

  pub fn execute<F>(&self, f: F) 
    where F: FnOnce() + Send + 'static
  {
    let job = Box::new(f);
    self.sender.send(job).unwrap();
  }
}


