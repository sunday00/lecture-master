use std::fmt::Debug; 

struct Monster {
  health: i32,
}

#[derive(Debug)]
struct Wizard {
  health: i32,
}

#[derive(Debug)]
struct Ranger {
  health: i32,
}

trait Magic{}
trait FightClose {}
trait FightFromDistance {}

impl FightClose for Ranger {}
impl FightClose for Wizard {}
impl FightFromDistance for Ranger {}
impl Magic for Wizard {}

fn attack_with_bow<T>
  (hero: &T, opponent: &mut Monster, distance: u8)
  where T: FightFromDistance + Debug {
    if distance < 10 {
      opponent.health -= 10;
      println!(
        "You attack with your bow.
         Your opponent now has {} health left.
         You are now at: {:?}",
        opponent.health, hero
      )
    }
}

fn attack_with_sword<T>
  (hero: &T, opponent: &mut Monster)
  where T: FightClose + Debug {
    opponent.health -= 10;
    println!(
      "You attack with your sword.
        Your opponent now has {} health left.
        You are now at: {:?}",
      opponent.health, hero
    )
}

fn fire_ball<T>
  (hero: &T, opponent: &mut Monster, distance: u8)
  where T: Magic + Debug {
    if distance < 10 {
      opponent.health -= 10;
      println!(
        "You raise your hands and cast a fireball!
         Your opponent now has {} health left. 
         You are now at: {:?}",
        opponent.health, hero
      )
    }
}

pub fn game2 (_: String) {
  let radagast = Wizard { health: 50 };
  let aragon = Ranger { health: 80 };

  let mut uruk_hai = Monster { health: 40 };

  attack_with_sword(&radagast, &mut uruk_hai);
  attack_with_bow(&aragon, &mut uruk_hai, 8);
  fire_ball(&radagast, &mut uruk_hai, 8);
}
