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

  Enemy({
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  }) : super(sprite: sprite, position: position, size: size, angle: pi);

  @override
  onMount() {
    super.onMount();

    final shape = CircleHitbox();

    add(shape);
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);

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

    if (other is Bullet) {
      removeFromParent();

      gameRef.player.score += 10;
      gameRef.playerData.money += 10;
    }

    if (other is Player) removeFromParent();
  }

  updatePosition(double dt) {
    position += _moveDirection.normalized() * _speed * dt;

    if (position.y > gameRef.size.y) removeFromParent();
  }

  @override
  void update(double dt) {
    super.update(dt);

    updatePosition(dt);
  }
}
