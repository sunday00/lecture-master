import 'package:flutter/material.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';
import 'package:hive/hive.dart';

part 'player_data.g.dart';

@HiveType(typeId: 0)
class PlayerData extends ChangeNotifier with HiveObjectMixin {
  @HiveField(0)
  SpaceshipType spaceshipType;

  @HiveField(1)
  List<SpaceshipType> ownedSpaceships;

  @HiveField(2)
  int highScore;

  @HiveField(3)
  int money;

  PlayerData({
    required this.spaceshipType,
    required this.ownedSpaceships,
    required this.highScore,
    required this.money,
  });

  PlayerData.fromMap(Map<String, dynamic> map)
      : spaceshipType = map['currentSpaceshipType'],
        ownedSpaceships = map['ownedSpaceshipTypes']
            .map((e) => e as SpaceshipType)
            .cast<SpaceshipType>()
            .toList(),
        highScore = map['highScore'],
        money = map['money'];

  static Map<String, dynamic> defaultData = {
    'currentSpaceshipType': SpaceshipType.Albatross,
    'ownedSpaceshipTypes': [
      SpaceshipType.Albatross,
    ],
    'highScore': 0,
    'money': 0,
  };

  bool isOwned(SpaceshipType spaceshipType) {
    return ownedSpaceships.contains(spaceshipType);
  }

  bool canBuy(SpaceshipType spaceshipType) {
    return money >= Spaceship.getSpaceshipByType(spaceshipType).cost;
  }

  bool isEquipped(SpaceshipType spaceshipType) {
    return this.spaceshipType == spaceshipType;
  }

  void buy(SpaceshipType spaceshipType) {
    if (canBuy(spaceshipType) && !isOwned(spaceshipType)) {
      money -= Spaceship.getSpaceshipByType(spaceshipType).cost;
      ownedSpaceships.add(spaceshipType);
      notifyListeners();
      save();
    }
  }

  void equip(SpaceshipType spaceshipType) {
    this.spaceshipType = spaceshipType;
    notifyListeners();
    save();
  }
}
