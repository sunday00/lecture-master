class Spaceship {
  final String name;
  final int cost;
  final int shootSpeed;
  final double speed;
  final int health;
  final int spriteId;
  final int level;

  const Spaceship({
    required this.name,
    required this.cost,
    required this.shootSpeed,
    required this.speed,
    required this.health,
    required this.spriteId,
    required this.level,
  });

  static Spaceship getSpaceshipByType(SpaceshipType spaceshipType) {
    return spaceships[spaceshipType] ?? spaceships.entries.first.value;
  }

  static const Map<SpaceshipType, Spaceship> spaceships = {
    SpaceshipType.Albatross: Spaceship(
      name: 'Albatross',
      cost: 0,
      shootSpeed: 10000,
      speed: 500,
      health: 100,
      spriteId: 3,
      level: 1,
    ),
    SpaceshipType.Boramae: Spaceship(
      name: 'Boramae',
      cost: 100,
      shootSpeed: 10500,
      speed: 700,
      health: 150,
      spriteId: 4,
      level: 2,
    ),
    SpaceshipType.Canary: Spaceship(
      name: 'Canary',
      cost: 200,
      shootSpeed: 11000,
      speed: 900,
      health: 200,
      spriteId: 5,
      level: 3,
    ),
    SpaceshipType.Dusky: Spaceship(
      name: 'Dusky',
      cost: 300,
      shootSpeed: 12000,
      speed: 1200,
      health: 300,
      spriteId: 6,
      level: 4,
    ),
    SpaceshipType.Raptor: Spaceship(
      name: 'Raptor',
      cost: 500,
      shootSpeed: 13500,
      speed: 1500,
      health: 500,
      spriteId: 7,
      level: 5,
    ),
  };
}

enum SpaceshipType {
  Albatross,
  Boramae,
  Canary,
  Dusky,
  Raptor,
}
