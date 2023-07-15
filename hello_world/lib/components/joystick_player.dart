import 'dart:async';

import 'package:flame/components.dart';
import 'package:flutter/material.dart';

class JoystickPlayer extends SpriteComponent with HasGameRef {
  double maxSpeed = 300.0;

  final JoystickComponent joystick;

  JoystickPlayer(this.joystick) : super(size: Vector2.all(50.0)) {
    anchor = Anchor.center;
  }

  @override
  Future<void> onLoad() async {
    super.onLoad();

    sprite = await gameRef.loadSprite('asteroids_ship.png');
    position = gameRef.size / 2;
  }

  @override
  void update(double dt) {
    if (!joystick.delta.isZero()) {
      position.add(joystick.relativeDelta * maxSpeed * dt);
      angle = joystick.delta.screenAngle();
    }

    if (position.x < 0) {
      position.x = gameRef.size.x - (size.x / 2);
    }

    if (position.y < 0) {
      position.y = gameRef.size.y - (size.y / 2);
    }

    if (position.x > gameRef.size.x) {
      position.x = 0 + (size.x / 2);
    }

    if (position.y > gameRef.size.y) {
      position.y = 0 + (size.y / 2);
    }
  }
}

class Bullet extends PositionComponent with HasGameRef {
  static final _paint = Paint()..color = Colors.white;
  final double speed = 450;
  late Vector2 _velocity;

  Bullet(JoystickPlayer player, Vector2 velocity)
      : _velocity = velocity,
        super(
            position: player.position,
            size: Vector2.all(4),
            anchor: Anchor.center);

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    _velocity = (_velocity)..scaleTo(speed);
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    // canvas.drawRect(size.toRect(), _paint);
    canvas.drawCircle(Vector2.zero().toOffset(), size.x, _paint);
  }

  @override
  void update(double dt) {
    position.add(_velocity * dt);

    if (position.x > gameRef.size.x ||
        position.y > gameRef.size.y ||
        position.x < 0 ||
        position.y < 0) removeFromParent();
  }
}
