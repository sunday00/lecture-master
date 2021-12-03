pub struct Ref<'a, T: 'a>(&'a T);

impl <'a, T>Ref<'a, T> {
  pub fn new(t: &T) -> Ref<T>{
    Ref(t)
  }
}

pub struct StaticRef<T: 'static>(&'static T);

impl <T>StaticRef<T> {
  pub fn new(t: &'static T) -> StaticRef<T>{
    StaticRef(t)
  }
}
