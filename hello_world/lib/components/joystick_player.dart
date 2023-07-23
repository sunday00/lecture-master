import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame_audio/flame_audio.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/my_game.dart';

class JoystickPlayer extends SpriteComponent
    with HasGameRef<MyGame>, KnowGameSize {
  double maxSpeed = 300.0;

  final JoystickComponent joystick;

  JoystickPlayer(this.joystick) : super(size: Vector2.all(50.0)) {
    anchor = Anchor.center;
  }

  @override
  Future<void> onLoad() async {
    super.onLoad();

    sprite = await gameRef.loadSprite('asteroids_ship.png');
    position = Vector2.zero();
  }

  @override
  void update(double dt) {
    if (!joystick.delta.isZero()) {
      position.add(joystick.relativeDelta * maxSpeed * dt);
      angle = joystick.delta.screenAngle();
    }

    if (position.x < gameMinX) {
      position.x = gameMaxX - (size.x / 2);
    }

    if (position.y < gameMinY) {
      position.y = gameMaxY - (size.y / 2);
    }

    if (position.y > gameMaxY) {
      position.y = gameMinY + (size.y / 2);
    }

    if (position.x > gameMaxX) {
      position.x = gameMinX + (size.x / 2);
    }
  }
}

class Bullet extends PositionComponent with HasGameRef<MyGame>, KnowGameSize {
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
    FlameAudio.play('laser_004.wav');
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

    if (position.x > gameMaxX ||
        position.y > gameMaxY ||
        position.x < gameMinX ||
        position.y < gameMinY) {
      gameRef.cameraComponent.shake();

      removeFromParent();
    }
  }
}
