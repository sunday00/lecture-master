use std::collections::HashMap;

pub fn hm (_: String) {
  struct City {
    name: String,
    population: HashMap<u16, u32>,
  }

  let mut tallinn = City {
    name: "Tallinn".to_string(),
    population: HashMap::new(),
  };

  tallinn.population.insert(1372, 3_250);
  tallinn.population.insert(1851, 24_000);
  tallinn.population.insert(2020, 437_619);

  for (year, population) in tallinn.population {
    println!("{}: {} has population {}", year, tallinn.name, population)
  }
}

use std::collections::BTreeMap;

pub fn btree (_: String) {
  struct City {
    name: String,
    population: BTreeMap<u16, u32>,
  }

  let mut tallinn = City {
    name: "Tallinn".to_string(),
    population: BTreeMap::new(),
  };

  tallinn.population.insert(1372, 3_250);
  tallinn.population.insert(1851, 24_000);
  tallinn.population.insert(2020, 437_619);

  for (year, population) in tallinn.population {
    println!("{}: {} has population {}", year, tallinn.name, population)
  }
}

pub fn k (_: String) {
  let canadian_cities = vec!["Calgary", "Vancouver", "Gimli"];
  let german_cities = vec!["Karlsruhe", "Bad Doberan", "Bielefeld"];

  let mut city_hashmap = HashMap::new();

  for city in canadian_cities {
    city_hashmap.insert(city, "CANADA");
  }

  for city in german_cities {
    city_hashmap.insert(city, "GERMANY");
  }

  println!("{:?}", city_hashmap.get("Bielefeld"));
  println!("{:?}", city_hashmap.get("BXXXXXXXd"));
  println!("{:?}", city_hashmap["Bielefeld"]);
  println!("{:?}", city_hashmap["BXXXXXXXd"]);
}

use rand::Rng;

pub fn lotto (_:String) {
  let mut lotto: BTreeMap<u8, u8> = BTreeMap::new();

  while lotto.len() < 6 {
    let n = rand::thread_rng().gen_range(1..47);

    if lotto.get(&n).is_none() {
      lotto.insert(n, lotto.len() as u8 + 1);
    }
  }

  let mut swap: BTreeMap<u8, u8> = BTreeMap::new();

  lotto.retain(|k, v| { swap.insert(*v, *k); return true });

  println!("{:?}", lotto);
  println!("{:?}", swap);
}

pub fn library(_: String) {
  let book_collection = vec![
    "Song of sword",
    "Ice, Fire And Song", 
    "Blitz", 
    "The Brain",
    "Blitz", 
    "Super Secretary",
    "Song of sword",
    ];

  let mut book_hashmap = HashMap::new();

  for book in book_collection {
    let v = book_hashmap.entry(book).or_insert(0);
    *v += 1;
  }

  for (book, bul) in book_hashmap {
    println!("{}, {}", book, bul)
  }
}

pub fn vote(_: String) {
  let data = vec![
    ("male", 9),
    ("female", 5),
    ("male", 0),
    ("female", 6),
    ("female", 5),
    ("male", 10),
  ];

  let mut survey_hash = HashMap::new();

  for item in data {
    survey_hash.entry(item.0).or_insert(Vec::new()).push(item.1);
  }

  for (gender, population) in survey_hash {
    // println!("{:?} : {:?}", gender, population);
    println!("{:?} : {:?}", gender, population.iter().sum::<u8>());
  }
}

