import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/particles.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/game/enemy.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/helper/hitbox_helper.dart';
import 'package:flutter_space_escape/helper/random_vector.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';

class Player extends SpriteComponent
    with HasGameRef<SpaceEscapeGame>, CollisionCallbacks, HitboxHelper {
  Vector2 _moveDirection = Vector2.zero();
  double _speedRate = 0;

  SpaceshipType spaceshipType;
  Spaceship _spaceship;

  int health = 100;
  int score = 0;

  late ShapeComponent shape;
  late ParticleSystemComponent particleComponent;

  Player({
    required this.spaceshipType,
    Sprite? sprite,
    Vector2? position,
    Vector2? size,
  })  : _spaceship = Spaceship.getSpaceshipByType(spaceshipType),
        super(sprite: sprite, position: position, size: size);

  @override
  onMount() {
    super.onMount();

    shape = CircleHitbox();

    add(shape);
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    super.onCollision(intersectionPoints, other);

    if (other is Enemy && health > 0) {
      health -= 10;
      gameRef.camera.shake(intensity: 5);
    }
  }

  updatePosition(double dt) {
    position +=
        _moveDirection.normalized() * _spaceship.speed * _speedRate * dt;

    position.clamp(
      Vector2.zero() + (size / 2),
      gameRef.canvasSize - (size / 2),
    );

    particleComponent = ParticleSystemComponent(
      // particle: MovingParticle(
      //   from: size / 2,
      //   to: Vector2(size.x / 2, size.y + 20),
      //   child: CircleParticle(
      //     radius: 2,
      //     lifespan: 1,
      //     paint: Paint()..color = Colors.white,
      //   ),
      // ),
      particle: Particle.generate(
        count: 10,
        lifespan: 0.1,
        generator: (i) => AcceleratedParticle(
          acceleration: Vector2(0, 0),
          speed: getBoostParticles(),
          position: size / 2,
          child: CircleParticle(
            radius: 2,
            // lifespan: 1,
            paint: Paint()..color = Colors.orange,
          ),
        ),
      ),
    );

    add(particleComponent);
  }

  @override
  void update(double dt) {
    super.update(dt);

    updatePosition(dt);
  }

  void setMoveDirection(Vector2 newMoveDirection, double speedRate) {
    _moveDirection = newMoveDirection;
    _speedRate = speedRate / 600;
  }

  void reset() {
    health = _spaceship.health;
    score = 0;
    _moveDirection = Vector2.zero();
    position = Vector2(
      gameRef.canvasSize.x / 2,
      gameRef.canvasSize.y * 0.75,
    );
  }

  void setSpaceshipType(SpaceshipType spaceshipType) {
    this.spaceshipType = spaceshipType;
    _spaceship = Spaceship.getSpaceshipByType(spaceshipType);
    sprite = gameRef.spriteSheet.getSpriteById(_spaceship.spriteId);
    health = _spaceship.health;
  }

  @override
  void onRemove() {
    // shape.removeFromParent();
    // particleComponent.removeFromParent();
    super.onRemove();
  }
}
