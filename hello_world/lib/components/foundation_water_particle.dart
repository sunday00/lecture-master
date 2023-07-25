import 'dart:ui';

import 'package:flame/components.dart';
import 'package:flame/particles.dart';

typedef TestPositionThreshold = bool Function(
    Vector2 thresholdPosition, Vector2 currPosition);

class FoundationWaterParticle extends AcceleratedParticle {
  Vector2? originPosition;
  TestPositionThreshold removeParticleTest;
  FoundationWaterParticle({
    required child,
    Vector2? acceleration,
    Vector2? speed,
    Vector2? position,
    double? lifespan,
    required this.removeParticleTest,
  })  : originPosition = position,
        super(
          child: child,
          acceleration: acceleration,
          speed: speed,
          position: position,
          lifespan: lifespan,
        );

  @override
  void update(double dt) {
    if (!removeParticleTest(originPosition!, position)) {
      super.update(dt);
    }
  }

  @override
  void render(Canvas canvas) {
    if (!removeParticleTest(originPosition!, position)) {
      super.render(canvas);
    }
  }
}
