import 'dart:math';

import 'package:flame/components.dart';

class Util {
  static Vector2 generateRandomPosition(Vector2 screenSize, Vector2 margins) {
    var result = Vector2.zero();
    var randomGenerator = Random();

    result = Vector2(
      randomGenerator
              .nextInt(screenSize.x.toInt() - 2 * margins.x.toInt())
              .toDouble() +
          margins.x -
          screenSize.x.toInt() / 2,
      randomGenerator
              .nextInt(screenSize.y.toInt() - 2 * margins.y.toInt())
              .toDouble() +
          margins.y -
          screenSize.y.toInt() / 2,
    );

    return result;
  }

  static Vector2 generateRandomVelocity(Vector2 screenSize, int min, int max) {
    var result = Vector2.zero();
    var randomGenerator = Random();
    double velocity;

    while (result == Vector2.zero()) {
      result = Vector2(
        randomGenerator.nextInt(3) - 1 * randomGenerator.nextDouble(),
        randomGenerator.nextInt(3) - 1 * randomGenerator.nextDouble(),
      );
    }

    result.normalize();
    velocity = (randomGenerator.nextInt(max - min) + min).toDouble();

    return result * velocity;
  }

  static Vector2 generateRandomDirection() {
    var result = Vector2.zero();
    var randomGenerator = Random();
    while (result == Vector2.zero()) {
      result = Vector2(
        randomGenerator.nextInt(2) - 1,
        randomGenerator.nextInt(2) - 1,
      );
    }
    return result;
  }

  static double generateRandomSpeed(int min, int max) {
    var randomGenerator = Random();

    return (randomGenerator.nextInt(max - min) + max).toDouble();
  }

  static bool isPositionOutOfBounds(Vector2 bounds, Vector2 position) {
    bool result = false;

    if (position.x >= bounds.x ||
        position.x <= 0 ||
        position.y <= 0 ||
        position.y >= bounds.y) result = true;

    return result;
  }
}
