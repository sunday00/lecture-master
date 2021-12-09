fn add_country_original(name: &mut String, addon: String){
  name.push_str(&addon);
}

pub fn chg_original_mode (_: String) {
  let mut country = String::from("Russia");
  add_country_original(&mut country, String::from("Hungary"));
  println!("{}", country)
}

fn add_country_new(mut country: String, addon: String) -> String {
  country.push_str(&addon);
  return country;
}

pub fn keep_original_mode (_: String) {
  let country = String::from("Brazil");
  let two_country :String = add_country_new(country, String::from("Swiss"));

  println!("{}", two_country);
}