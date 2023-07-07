import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flutter_space_escape/game/enemy.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/helper/hitbox_helper.dart';

class Player extends SpriteComponent
    with HasGameRef<SpaceEscapeGame>, CollisionCallbacks, HitboxHelper {
  Vector2 _moveDirection = Vector2.zero();

  double _speed = 300;

  Player({
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  }) : super(sprite: sprite, position: position, size: size);

  @override
  onMount() {
    super.onMount();

    final shape = CircleHitbox();

    add(shape);
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);

    if (other is Enemy) {
      //Todo
      print('enemy hits player');
      removeFromParent();
    }
  }

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
