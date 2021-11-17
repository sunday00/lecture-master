use super::blog_encode::Post;

pub fn run () {
  let mut post = Post::new();

  let msg = String::from("What a sleepy today...");

  post.add_text(&msg);
  
  let post = post.request_review();

  let post = post.approve();

  assert_eq!(&msg, post.content());
  println!( "{}", &msg );
}