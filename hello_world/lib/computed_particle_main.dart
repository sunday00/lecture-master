import 'dart:math';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/particles.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with TapDetector {
  @override
  void onTapUp(TapUpInfo info) {
    add(ParticleGenerator.createParticleEngine(
        position: info.eventPosition.game));
  }
}

class ParticleGenerator {
  static ParticleSystemComponent createParticleEngine(
      {required Vector2 position}) {
    return ParticleSystemComponent(
      position: position,
      particle: Particle.generate(
          count: 10,
          lifespan: 2,
          generator: (i) {
            final initialSpeed = randomVector()..scale(200);
            final deceleration = initialSpeed * -1;
            final gravity = Vector2(0, 40);
            List<Color> colors = randomColor();

            return AcceleratedParticle(
              lifespan: 2,
              speed: initialSpeed,
              acceleration: deceleration + gravity,
              child: ComputedParticle(renderer: (canvas, particle) {
                canvas.drawCircle(
                  Offset.zero,
                  Random().nextDouble() * particle.progress > .6
                      ? Random().nextDouble() * (50 * particle.progress)
                      : 2 + (3 * particle.progress),
                  Paint()
                    ..color = Color.lerp(
                        colors[0], colors[1], Random().nextDouble())!,
                );
              }),
            );
          }),
    );
  }

  static Vector2 randomVector([int min = -1, int max = 1]) {
    final Random rnd = Random();

    double x = min + ((max - min) * rnd.nextDouble());
    double y = min + ((max - min) * rnd.nextDouble());

    return Vector2(x, y);
  }

  static List<Color> randomColor() {
    var colors = [
      [Colors.blue, Colors.blue.shade300],
      [Colors.red, Colors.yellow],
      [Colors.green, Colors.green.shade300],
      [Colors.purple, Colors.pink.shade300],
    ];

    return colors[Random().nextInt(colors.length)];
  }
}
