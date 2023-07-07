import 'dart:ui';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/palette.dart';

mixin HitboxHelper {
  renderShape(ShapeHitbox shape, Vector2 size) {
    if (shape is CircleHitbox) {
      shape.add(
        CircleComponent(
          paint: BasicPalette.red.paint()
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2.0,
          radius: size.x / 2,
          position: size / 2,
        )..anchor = Anchor.center,
      );
    }
  }
}
