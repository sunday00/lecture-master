import 'dart:math';

import 'package:flame/components.dart';
import 'package:flutter_space_escape/game/game.dart';

class Enemy extends SpriteComponent with HasGameRef<SpaceEscapeGame> {
  // Vector2 _moveDirection = Vector2.zero();
  Vector2 _moveDirection = Vector2(0, 1);

  double _speed = 250;

  Enemy({
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  }) : super(sprite: sprite, position: position, size: size, angle: pi);

  // @override
  // onMount() {
  //   super.onMount();
  //
  //   // flipVertically();
  // }

  updatePosition(double dt) {
    position += _moveDirection.normalized() * _speed * dt;

    if (position.y > gameRef.size.y) removeFromParent();
  }

  @override
  void update(double dt) {
    super.update(dt);

    updatePosition(dt);
  }
  //
  // void setMoveDirection(Vector2 newMoveDirection, double speed) {
  //   _moveDirection = newMoveDirection;
  //   _speed = speed;
  // }

  @override
  void onRemove() {
    // print('Enemy: Bye~!');
  }
}
