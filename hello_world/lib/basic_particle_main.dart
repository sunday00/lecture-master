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

class MyApp extends MyGame with PanDetector, TapDetector {
  @override
  void onPanUpdate(DragUpdateInfo info) {
    super.onPanUpdate(info);

    add(ParticleGenerator.createParticleEngine(
        position: info.eventPosition.game));
  }

  @override
  void onTapUp(TapUpInfo info) {
    add(ParticleGenerator2.createParticleEngine(
        position: info.eventPosition.game));
  }
}

class ParticleGenerator {
  static final Random _random = Random();

  static ParticleSystemComponent createParticleEngine(
      {required Vector2 position}) {
    return ParticleSystemComponent(
      particle: AcceleratedParticle(
          lifespan: 0.5,
          position: position,
          speed: Vector2(_random.nextDouble() * 200 - 100,
              max(_random.nextDouble(), 0.1) * 10),
          child: CircleParticle(
            radius: 1.0,
            paint: Paint()
              ..color = Color.lerp(
                Colors.yellow,
                Colors.red,
                _random.nextDouble(),
              )!,
          )),
    );
  }
}

class ParticleGenerator2 {
  static ParticleSystemComponent createParticleEngine(
      {required Vector2 position}) {
    List<Color> colors = randomColor();

    return ParticleSystemComponent(
      position: position,
      particle: Particle.generate(
        count: 30,
        lifespan: 4,
        generator: (i) => AcceleratedParticle(
          acceleration: randomVector(-1, 1)..scale(50),
          child: CircleParticle(
            paint: Paint()
              ..color =
                  Color.lerp(colors[0], colors[1], Random().nextDouble())!,
            radius: 2,
          ),
        ),
      ),
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
