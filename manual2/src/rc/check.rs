pub fn check(_: String) {
  fn takes_a_string(input: &String){
    println!("It is: {}", input)
  }

  fn also_take_a_string(input: String) {
    println!("It is: {}", input)
  }

  let user_name = String::from("User MacUserson");

  takes_a_string(&user_name);
  also_take_a_string(user_name);
}

#[allow(dead_code)]
#[allow(unused_variables)]
pub fn citizen(_: String) {
  use std::rc::Rc;

  struct City {
    name: String,
    population: u32,
    city_history: Rc<String>,
  }
  
  struct CityData {
    names: Vec<String>,
    histories: Vec<Rc<String>>,
  }

  let calgary = City {
    name: "Calgary".to_string(),
    population: 1_200_000,
    city_history: Rc::new("Calgary began as a fort called Fort Calgary that...".to_string()),
  };

  let canada_cities = CityData {
    names: vec![calgary.name],
    histories: vec![calgary.city_history.clone()],
    // histories: vec![calgary.city_history.clone()],
  };

  println!("Calgary's history is: {}", calgary.city_history);
  println!("{:?}", Rc::strong_count(&calgary.city_history));

  let new_owner1 = calgary.city_history;
  
}
