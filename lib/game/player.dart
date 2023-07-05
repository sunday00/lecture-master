import 'package:flame/components.dart';
import 'package:flutter_space_escape/game/game.dart';

class Player extends SpriteComponent with HasGameRef<SpaceEscapeGame> {
  Vector2 _moveDirection = Vector2.zero();

  double _speed = 300;

  Player({
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  }) : super(sprite: sprite, position: position, size: size);

  updatePosition(double dt) {
    position += _moveDirection.normalized() * _speed * dt;

    position.clamp(
      Vector2.zero() + (size / 2),
      gameRef.canvasSize - (size / 2),
    );
  }

  @override
  void update(double dt) {
    super.update(dt);

    updatePosition(dt);
  }

  void setMoveDirection(Vector2 newMoveDirection, double speed) {
    _moveDirection = newMoveDirection;
    _speed = speed;
  }
}
