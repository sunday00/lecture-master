import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame_audio/flame_audio.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/components/joystick_player.dart';
import 'package:hello_world/components/lifebar_text.dart';
import 'package:hello_world/components/particle_generator.dart';
import 'package:hello_world/my_game.dart';

Set<String> observedCollisions = <String>{};

class Enemy extends CircleComponent
    with HasGameRef<MyGame>, CollisionCallbacks, KnowGameSize {
  final _collisionColor = Colors.amber;
  final _defaultColor = Colors.cyan;
  Color _currentColor = Colors.cyan;

  bool _isWallHit = false;
  bool _isCollision = false;
  late double _speed;

  int xDirection = 1;
  int yDirection = 1;

  int _objectLifeValue = 10;

  late LifeBarText lifeBarText;

  Map<String, Enemy> collision = <String, Enemy>{};

  Enemy(Vector2 position, Vector2 velocity, double speed, int ordinalNumber)
      : super(
          position: position,
          radius: 20,
          anchor: Anchor.center,
        ) {
    xDirection = velocity.x.toInt();
    yDirection = velocity.y.toInt();
    _speed = speed;

    add(CircleHitbox()..renderShape = true);

    lifeBarText = LifeBarText(ordinalNumber);
    lifeBarText.anchor = Anchor.center;
  }

  @override
  Future<void> onLoad() async {
    await FlameAudio.audioCache.load('ball_bounce_off_ball.ogg');

    lifeBarText.position = Vector2(size.x / 2, -10);

    add(lifeBarText);

    return super.onLoad();
  }

  @override
  void update(double dt) {
    super.update(dt);

    List keys = [];
    for (var other in collision.entries) {
      Enemy otherObj = other.value;
      if (distance(otherObj) > size.x) {
        keys.add(other.key);
      }
    }
    collision.removeWhere((key, value) => keys.contains(key));

    x += xDirection * _speed * dt;
    y += yDirection * _speed * dt;

    final rect = toRect();

    if ((rect.left <= gameMinX && xDirection == -1) ||
        (rect.right >= gameMaxX && xDirection == 1)) {
      xDirection = xDirection * -1;
      _isWallHit = true;
    }

    if ((rect.top <= gameMinY && yDirection == -1) ||
        (rect.bottom >= gameMaxY && yDirection == 1)) {
      yDirection = yDirection * -1;
      _isWallHit = true;
    }

    _currentColor = _isCollision ? _collisionColor : _defaultColor;

    if (_isCollision) {
      _objectLifeValue--;
      _isCollision = false;
    }

    if (_isWallHit) {
      _objectLifeValue--;
      _isWallHit = false;
    }

    lifeBarText.healthData = _objectLifeValue;

    if (_objectLifeValue <= 0) {
      removeFromParent();
    }
  }

  @override
  render(Canvas canvas) {
    super.render(canvas);
    paint = Paint()..color = _currentColor;
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);
    if (other is Bullet) {
      //TODO: life --

      gameRef.world.add(ParticleGenerator.enemyBoom(position: other.position));
      FlameAudio.play('missile_hit.wav', volume: 0.7);
      removeFromParent();
      other.removeFromParent();

      //TODO: add score
    }

    if (other is JoystickPlayer) {
      gameRef.world.add(ParticleGenerator.playerBoom(
        images: gameRef.images,
        position: other.position,
      ));
      FlameAudio.play('missile_hit.wav', volume: 0.7);
      removeFromParent();

      gameRef.cameraComponent.shake();
      other.removeFromParent();
    }
  }
}
