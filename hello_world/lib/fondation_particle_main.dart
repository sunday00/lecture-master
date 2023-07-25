import 'dart:async';
import 'dart:math';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/particles.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/components/foundation_water_particle.dart';
import 'package:hello_world/my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with TapDetector {
  static const gravity = 130.0;
  static const airFriction = -10.0;

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();
  }

  @override
  void onTapUp(TapUpInfo info) {
    Vector2 position = info.eventPosition.game;

    add(ParticleGenerator.createParticleEngine(position: position));
  }
}

class ParticleGenerator {
  static ParticleSystemComponent createParticleEngine(
      {required Vector2 position}) {
    return ParticleSystemComponent(
      position: position,
      particle: Particle.generate(
        count: 25,
        lifespan: 10,
        generator: (i) {
          final speed = randomVectorUpperQuads()..scale(300);
          final deceleration = getDeceleration(position, speed);

          // final waterParticle = CircleComponent(
          //   position: Vector2.zero(),
          //   paint: Paint()..color = Colors.lightBlueAccent,
          //   radius: 2,
          // )..onLoad();

          return FoundationWaterParticle(
            removeParticleTest: removeParticleTest,
            position: Vector2.zero(),
            speed: speed,
            acceleration: deceleration,
            // child: ComponentParticle(
            //   component: waterParticle,
            // ),
            child: CircleParticle(
              paint: Paint()..color = Colors.lightBlueAccent,
              radius: 2,
            ),
          );
        },
      ),
    );
  }

  static Vector2 randomVectorUpperQuads() {
    final rand = Random();

    double x = rand.nextDouble() / 4;
    double y = -rand.nextDouble() * 0.75;
    Vector2 result = Vector2(x, y);

    if (rand.nextBool() == false) {
      result.x *= -1;
    }

    return result;
  }

  static Vector2 getDeceleration(Vector2? position, Vector2? speed) {
    Vector2 result = Vector2(MyApp.airFriction, MyApp.gravity);
    if (speed!.x < position!.x) {
      result.x = -MyApp.airFriction;
    }

    return result;
  }

  static bool removeParticleTest(
      Vector2 thresholdPosition, Vector2 currPosition) {
    return currPosition.y > thresholdPosition.y;
  }
}
