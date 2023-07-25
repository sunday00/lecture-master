import 'package:flame/cache.dart';
import 'package:flame/components.dart';
import 'package:flame/particles.dart';
import 'package:flame/sprite.dart';
import 'package:flutter/material.dart';

class ParticleGenerator {
  static ParticleSystemComponent enemyBoom({required Vector2 position}) {
    return ParticleSystemComponent(
      position: position,
      particle: Particle.generate(
        generator: (i) {
          Vector2 acceleration = Vector2(-1, -1) + (Vector2.random() * 2);

          return AcceleratedParticle(
            acceleration: acceleration..scale(200),
            child: CircleParticle(
              paint: Paint()..color = Colors.orange,
              radius: 1,
            ),
          );
        },
        count: 45,
        lifespan: 1,
      ),
    );
  }

  static ParticleSystemComponent playerBoom(
      {required Images images, required Vector2 position}) {
    // position.sub(Vector2(200, -250));
    return ParticleSystemComponent(
      position: position,
      anchor: Anchor.center,
      particle: AcceleratedParticle(
        lifespan: 0.5,
        child: SpriteAnimationParticle(
          animation: SpriteAnimation(
            List<SpriteAnimationFrame>.generate(
              64,
              (index) => SpriteAnimationFrame(
                SpriteSheet.fromColumnsAndRows(
                  image: images.fromCache('boom.png'),
                  columns: 8,
                  rows: 8,
                ).getSpriteById(index),
                0.1,
              ),
            ),
            loop: false,
          ),
          size: Vector2(300, 300),
          anchor: Anchor.center,
        ),
      ),
    );
  }
}
