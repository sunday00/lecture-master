import 'dart:math';

import 'package:flame/components.dart';

Vector2 getBoostParticles({double yDirection = -1, double size = 500}) {
  return (Vector2.random(Random()) - Vector2(0.5, yDirection)) * size;
}
