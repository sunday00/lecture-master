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

  @override
  void update(double dt) {
    super.update(dt);

    position += _moveDirection.normalized() * _speed * dt;

    if (position.x < (size.x / 2)) position.x = size.x / 2;
    if (position.y < (size.y / 2)) position.y = size.y / 2;
    if (position.x > (gameRef.canvasSize.x - (size.x / 2))) {
      position.x = gameRef.canvasSize.x - (size.x / 2);
    }
    if (position.y > (gameRef.canvasSize.y - (size.y / 2))) {
      position.y = gameRef.canvasSize.y - (size.y / 2);
    }
  }

  void setMoveDirection(Vector2 newMoveDirection, double speed) {
    _moveDirection = newMoveDirection;
    _speed = speed;
  }
}
