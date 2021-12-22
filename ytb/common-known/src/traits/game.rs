#[allow(non_snake_case)]
pub fn fightD(_: String) {
  struct Monster {
    health: u8
  }

  #[derive(Debug)]
  struct Wizard {
    health: u8
  }

  #[derive(Debug)]
  struct Ranger {
    health: u8
  }
  
  trait FightClose: std::fmt::Debug {
    fn attack_with_sword(&self, opponent: &mut Monster) {
      opponent.health -= 10;
      println!("attack with sword. opponent health {}. Hero state {:?}",
       opponent.health,
       self
      );
    }

    fn attack_with_hand(&self, opponent: &mut Monster) {
      opponent.health -= 2;
      println!("attack with hand. opponent health {}. Hero state {:?}",
       opponent.health,
       self
      );
    }
  }

  impl FightClose for Wizard {}
  impl FightClose for Ranger {}

  trait FightFromDistance: std::fmt::Debug {
    fn attack_with_bow(&self, opponent: &mut Monster, distance: u8) {
      if distance < 10 {
        opponent.health -= 10;
        println!(
          "attack with bow. opponent health {}. Hero state {:?}",
          opponent.health,
          self
        )
      }
    }

    fn attack_with_rock(&self, opponent: &mut Monster, distance: u8) {
      if distance < 3 {
        opponent.health -= 4;
        println!(
          "attack with rock. opponent health {}. Hero state {:?}",
          opponent.health,
          self
        )
      }
    }
  }

  impl FightFromDistance for Ranger {}

  let radagast = Wizard {
    health: 100
  };
  let aragorn = Ranger {
    health: 150
  };
  let mut uruk_hai = Monster{ health: 40};

  radagast.attack_with_sword(&mut uruk_hai);
  aragorn.attack_with_bow(&mut uruk_hai, 8);
}