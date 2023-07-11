import 'dart:math';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/particles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/game/bullet.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/game/player.dart';

import '../helper/random_vector.dart';

class Enemy extends SpriteComponent
    with HasGameRef<SpaceEscapeGame>, CollisionCallbacks {
  // Vector2 _moveDirection = Vector2.zero();
  Vector2 _moveDirection = Vector2(0, 1);

  double _speed = 250;

  late Timer _freezeTimer;

  Enemy({
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  }) : super(sprite: sprite, position: position, size: size, angle: pi) {
    _freezeTimer = Timer(2, onTick: () {
      _speed = 250;
    });
  }

  @override
  onMount() {
    super.onMount();

    final shape = CircleHitbox();

    add(shape);
  }

  void addSpark() {
    final particleComponent = ParticleSystemComponent(
      particle: Particle.generate(
        count: 30,
        lifespan: 5,
        generator: (i) => AcceleratedParticle(
          // acceleration: getBoostParticles(),
          speed: getBoostParticles(yDirection: 1),
          position: position.clone(),
          child: CircleParticle(
            radius: 2,
            paint: Paint()..color = Colors.blue,
          ),
        ),
      ),
    );

    gameRef.add(particleComponent);
  }

  void addMoneyAndScore() {
    gameRef.player.score += 10;
    gameRef.playerData.money += 10;
    gameRef.playerData.save();
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);

    if (other is Bullet) {
      addSpark();

      removeFromParent();

      addMoneyAndScore();
    }

    if (other is Player) {
      addSpark();

      removeFromParent();
    }
  }

  updatePosition(double dt) {
    position += _moveDirection.normalized() * _speed * dt;

    if (position.y > gameRef.size.y) removeFromParent();
  }

  @override
  void update(double dt) {
    super.update(dt);

    _freezeTimer.update(dt);

    updatePosition(dt);
  }

  void destroy() {
    addSpark();
    removeFromParent();
    addMoneyAndScore();
  }

  void freeze() {
    _speed = 0;
    _freezeTimer.stop();
    _freezeTimer.start();
  }
}
