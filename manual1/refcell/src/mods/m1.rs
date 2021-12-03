pub trait Messenger{
  fn send(&self, msg: &str);
}

pub struct LimitTracker<'a, T:'a + Messenger> {
  messenger: &'a T,
  value: usize,
  max: usize,
}


impl<'a, T> LimitTracker<'a, T> where T:Messenger {
  pub fn new(messenger: &T, max: usize) -> LimitTracker<T> {
    LimitTracker {
      messenger,
      value: 0,
      max,
    }
  }
  pub fn set_value(&mut self, value: usize){
    self.value = value;

    let percent_of_max = self.value as f64 / self.max as f64;

    if percent_of_max >= 0.75 && percent_of_max < 0.9 {
      self.messenger.send("almost max")
    } else if percent_of_max >= 0.9 && percent_of_max < 1.0 {
      self.messenger.send("really closer to max. Danger")
    } else if percent_of_max >= 1.0 {
      self.messenger.send("E... reached max")
    }
  }
}

pub fn run1() {

}

#[cfg(test)]
mod tests {
  use super::*;
  use std::cell::RefCell;

  struct MockMessenger {
    // sent_messages: Vec<String>,
    sent_messages: RefCell<Vec<String>>,
  }

  impl MockMessenger {
    fn new() -> MockMessenger {
      // MockMessenger { sent_messages: vec![] }
      MockMessenger { sent_messages: RefCell::new(vec![]) }
    }
  }

  impl Messenger for MockMessenger {
    // fn send(&self, message: &str) {
      //   let mut ob = self.sent_messages.borrow_mut();
      //   let mut tb = self.sent_messages.borrow_mut();
      //   ob.push(String::from(message));
      //   tb.push(String::from(message));
      // }
      
      fn send(&self, message: &str) {
        // self.sent_messages.push(String::from(message));
        self.sent_messages.borrow_mut().push(String::from(message));
      }
    }

  #[test]
  fn it_sends_an_over_75_percent_warning_message() {
    let mock_messenger = MockMessenger::new();
    let mut limit_tracker = LimitTracker::new(&mock_messenger, 100);

    limit_tracker.set_value(80);

    // assert_eq!(mock_messenger.sent_messages.len(), 1);
    assert_eq!(mock_messenger.sent_messages.borrow().len(), 1);
  }
}














