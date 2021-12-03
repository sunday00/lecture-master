// use std::env;

struct User {
  username: String,
  email: String,
  sign_in_count: u64,
  active: bool,
}

#[allow(unused_variables)]
#[allow(unused_mut)]
pub fn what_is_struct() {
  let mut user1 = User {
    email: String::from("loveWain@bw.inc"),
    username: String::from("joker"),
    sign_in_count: 1,
    active: true,
  };

  println!("{}", user1.email);
  println!("{}", user1.username);
  println!("{}", user1.sign_in_count);
  println!("{}", user1.active);

  user1.sign_in_count += 1;

  println!("{}", user1.sign_in_count);

  let user2 = build_user(String::from("batman"), String::from("darkknight@bw.inc"));

  let mut user3 = User {
    username: String::from("Tim Drake"),
    email: String::from("robin@bw.inc"),
    sign_in_count: user1.sign_in_count,
    active: user1.active,
  };

  let mut user4 = User {
    username: String::from("Dick grison"),
    email: String::from("nightWong@bw.inc"),
    ..user1
  };
}

fn build_user(username: String, email: String) -> User {
  return User {
    email,
    username,
    sign_in_count: 1,
    active: true,
  };
}
