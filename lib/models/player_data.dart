import 'package:flutter/material.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';

class PlayerData extends ChangeNotifier {
  SpaceshipType spaceshipType;
  List<SpaceshipType> ownedSpaceships;
  int highScore;
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
    'money': 500,
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
    }
  }

  void equip(SpaceshipType spaceshipType) {
    this.spaceshipType = spaceshipType;
    notifyListeners();
  }
}
