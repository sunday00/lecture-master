import 'dart:math';

import 'package:flame/components.dart';
import 'package:flame/sprite.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/game/power_up.dart';

enum PowerUpTypes {
  Health,
  Freeze,
  Nuke,
  MultiShot,
}

class PowerUpManager extends Component with HasGameRef<SpaceEscapeGame> {
  final SpriteSheet spriteSheet;

  late Timer _SpawnTimer;

  late Timer _freezeTimer;

  static final Map<
          PowerUpTypes,
          PowerUp Function(
              SpriteSheet spriteSheet, Vector2 position, Vector2 size)>
      _poserUpMap = {
    PowerUpTypes.Health: (spriteSheet, position, size) => Health(
          sprite: spriteSheet.getSpriteById(45),
          position: position,
          size: size,
        ),
    PowerUpTypes.Freeze: (spriteSheet, position, size) => Freeze(
          sprite: spriteSheet.getSpriteById(46),
          position: position,
          size: size,
        ),
    PowerUpTypes.Nuke: (spriteSheet, position, size) => Nuke(
          sprite: spriteSheet.getSpriteById(41),
          position: position,
          size: size,
        ),
    PowerUpTypes.MultiShot: (spriteSheet, position, size) => MultiShot(
          sprite: spriteSheet.getSpriteById(47),
          position: position,
          size: size,
        ),
  };

  PowerUpManager({required SpriteSheet this.spriteSheet}) : super() {
    _SpawnTimer = Timer(
      15,
      onTick: _spawnPowerUp,
      repeat: true,
    );

    _freezeTimer = Timer(5, onTick: () {
      _SpawnTimer.start();
    });
  }

  void _spawnPowerUp() {
    Vector2 initialSize = Vector2(40, 40);
    Vector2 position = Vector2(
      Random().nextDouble() * gameRef.canvasSize.x,
      Random().nextDouble() * gameRef.canvasSize.y,
    );

    position.clamp(
        Vector2.zero() + initialSize / 2, gameRef.canvasSize - initialSize / 2);

    PowerUp? powerUp = _poserUpMap[PowerUpTypes.values
            .elementAt(Random().nextInt(PowerUpTypes.values.length))]
        ?.call(spriteSheet, position, initialSize);

    if (powerUp != null) {
      powerUp.anchor = Anchor.center;
      gameRef.add(powerUp);
    }
  }

  @override
  void onMount() {
    super.onMount();
    _SpawnTimer.start();
  }

  @override
  void onRemove() {
    super.onRemove();
    _SpawnTimer.stop();
  }

  @override
  void update(double dt) {
    super.update(dt);
    _SpawnTimer.update(dt);
    _freezeTimer.update(dt);
  }

  void reset() {
    _SpawnTimer.stop();
    _SpawnTimer.start();
  }

  void freeze() {
    _SpawnTimer.stop();
    _freezeTimer.stop();
    _freezeTimer.start();
  }
}
