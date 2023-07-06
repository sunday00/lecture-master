import 'dart:math';

import 'package:flame/components.dart';
import 'package:flutter_space_escape/game/enemy.dart';
import 'package:flutter_space_escape/game/game.dart';

class EnemyManager extends Component with HasGameRef<SpaceEscapeGame> {
  late final spriteSheet;
  late Timer _timer;

  EnemyManager({required this.spriteSheet}) : super() {
    _timer = Timer(
      1,
      onTick: _spawnEnemy,
      repeat: true,
    );
  }

  void _spawnEnemy() {
    Vector2 initialSize = Vector2(50, 50);
    Vector2 position = Vector2(Random().nextDouble() * gameRef.canvasSize.x, 0);

    int assetId = 12 + Random().nextInt(16 - 12);

    position.clamp(
        Vector2.zero() + initialSize / 2, gameRef.canvasSize - initialSize / 2);

    Enemy enemy = Enemy(
      sprite: spriteSheet.getSpriteById(assetId),
      size: initialSize,
      // position: gameRef.canvasSize / 2 + Vector2(0, -100),
      position: position,
    );

    enemy.anchor = Anchor.center;

    add(enemy);
  }

  @override
  void onMount() {
    super.onMount();
    _timer.start();
  }

  @override
  void onRemove() {
    super.onRemove();
    _timer.stop();
  }

  @override
  void update(double dt) {
    super.update(dt);
    _timer.update(dt);
  }
}
