use std::collections::HashMap as hm;

pub fn run1(){
  let mut scores : hm<String, i8> = hm::new();
  
  scores.insert(String::from("Apple"), 1);
  scores.insert(String::from("Banana"), 2);

  println!("{:?}", scores);

  let animals = vec!["Alligator", "Bear", "Camel"];
  let zoo_holds = vec![10, 4, 55];

  let mut zoo_animal : hm<_,_> = animals.iter().zip(zoo_holds.iter()).collect();

  println!("{:?}", zoo_animal);

  let sc = zoo_animal.get( &"Alligator" );
  println!("{:?}", sc);

  for (k, v) in &zoo_animal { 
    println!("{}:{}" , k, v)
  }

  // println!("{:?}", zoo_animal.entry( &"Dear" ));
  // println!("{:?}", zoo_animal.entry( &"Dear" ).or_insert(&35));
  zoo_animal.entry( &"Dear" ).or_insert(&35);
  println!("{:?}", zoo_animal);
  
}

pub fn run2 () {
  let text = "In the United States, chickens were raised primarily on family farms or in some cases, in poultry colonies, such as Judge Emery's Poultry Colony[1] until about 1960. Originally, the primary value in poultry keeping was eggs, and meat was considered a byproduct of egg production.[2] A United States Department of the Interior census in 1840 found American farmers had a total combined poultry flock valued at approximately $12 million ($311 million in today's dollars). Following the Treaty of Wanghia between the US and China in 1844, oriental poultry breeds were imported to New England, and Rhode Island became the nation's first major poultry center.[3] Cross-breeding between English and Asian birds created new breeds still common today, like the Barred Plymouth Rock. Chickens remained primarily to provide eggs, mostly to the farmer (subsistence agriculture), with commercialization still largely unexplored. Farm flocks tended to be small because the hens largely fed themselves through foraging, with some supplementation of grain, scraps, and waste products from other farm ventures. Such feedstuffs were in limited supply, especially in the winter, and this tended to regulate the size of the farm flocks. Soon after poultry keeping gained the attention of agricultural researchers (around 1896), improvements in nutrition and management made poultry keeping more profitable and businesslike. Poultry shows spread interest and understanding, with 88% of all farmers having chickens by 1910.";

  let mut map : hm<String, u8> = hm::new();

  for word in text.split_whitespace() {
    let count = map.entry(String::from(word)).or_insert(0);
    *count += 1;
  }

  println!("{:?}", map);

}

// fn print_type_of<T>(_: &T) -> &str{
//   std::any::type_name::<T>()
// }

pub fn run3 () {
  let mut m : hm<String, f32> = hm::new();

  // let mut l = vec![1, 7, 4, 9, 6, 11, 77, 34];
  // let mut l = vec![1, 7, 4, 9, 6, 11, 77, 34, 45];
  let mut l = vec![3, 5, 7, 4, 5, 3, 7, 7, 7, 7, 7, 4, 3, 9, 100];

  l.sort();

  let len = l.len();

  let sum = l.iter().sum::<u8>();

  m.insert( String::from("sum"), sum as f32 );

  let n: f32;
  if len % 2 == 0 {
    n = ((l[ (len / 2) - 1 ] + l[ (len / 2) ]) / 2) as f32;
  } else {
    n = l[ (len / 2)] as f32;
  }
  
  m.insert(String::from("mid"), n);
  
  m.insert(String::from("avg"), (sum as f32) / (len as f32));

  let mut lm : hm<u8, u8> = hm::new();
  for &numb in &l {
    let count = lm.entry(numb).or_insert(0);
    *count += 1;
  }

  let mut max = 0;
  for (k, v) in lm {
    if v > max {
      max = k;
    }
  }

  m.insert(String::from("frq"), max as f32);

  println!("{:?}", l);
  println!("{:?}", m);
}