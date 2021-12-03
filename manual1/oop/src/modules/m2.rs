use super::blog::Post;

pub fn run () {
  let mut post = Post::new();

  post.add_text("What a sleepy today...");
  assert_eq!("", post.content());

  post.request_review();
  assert_eq!("", post.content());

  post.approve();
  assert_eq!("What a sleepy today...", post.content());
}