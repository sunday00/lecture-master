import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flutter_space_escape/game/enemy.dart';

class Bullet extends SpriteComponent with HasGameRef, CollisionCallbacks {
  double _speed = 450;

  Vector2 direction = Vector2(0, -1);

  Bullet({
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  }) : super(sprite: sprite, position: position, size: size);

  @override
  void onMount() {
    super.onMount();

    final shape = CircleHitbox();
    add(shape);
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);

    if (other is Enemy) removeFromParent();
  }

  @override
  void update(double dt) {
    super.update(dt);

    position += direction * _speed * dt;

    if (position.y < 0) {
      removeFromParent();
    }
  }
}
