class Spaceship {
  final String name;
  final int cost;
  final double speed;
  final int spriteId;
  final int level;

  const Spaceship({
    required this.name,
    required this.cost,
    required this.speed,
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
      speed: 250,
      spriteId: 6,
      level: 1,
    ),
    SpaceshipType.Boramae: Spaceship(
      name: 'Boramae',
      cost: 100,
      speed: 300,
      spriteId: 7,
      level: 2,
    ),
    SpaceshipType.Canary: Spaceship(
      name: 'Canary',
      cost: 200,
      speed: 350,
      spriteId: 8,
      level: 3,
    ),
    SpaceshipType.Dusky: Spaceship(
      name: 'Dusky',
      cost: 300,
      speed: 400,
      spriteId: 9,
      level: 4,
    ),
    SpaceshipType.Raptor: Spaceship(
      name: 'Raptor',
      cost: 500,
      speed: 450,
      spriteId: 10,
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
