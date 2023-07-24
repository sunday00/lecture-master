import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/utils/component_utils.dart';

import 'components/sounded_ball.dart';
import 'my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with HasCollisionDetection {
  static const int numSimulationObjects = 10;

  final TextPaint textConfig = TextPaint(
    style: const TextStyle(color: Colors.white, fontSize: 15),
  );

  // late Timer interval;
  late TimerComponent interval;

  int elapsedTicks = 0;

  @override
  FutureOr<void> onLoad() {
    super.onLoad();

    // interval = Timer(1.00, onTick: () {
    //   Vector2 rndPosition = Util.generateRandomPosition(size, Vector2.all(50));
    //   Vector2 rndVelocity = Util.generateRandomDirection();
    //   double rndSpeed = Util.generateRandomSpeed(10, 50);
    //
    //   SoundedBall ball = SoundedBall(rndPosition, rndVelocity, rndSpeed);
    //
    //   cameraComponent.world.add(ball);
    //
    //   elapsedTicks++;
    //
    //   if (elapsedTicks > numSimulationObjects) {
    //     interval.stop();
    //   }
    // }, repeat: true);

    interval = TimerComponent(
        period: 1,
        removeOnFinish: true,
        autoStart: true,
        onTick: () {
          Vector2 rndPosition =
              Util.generateRandomPosition(size, Vector2.all(50));
          Vector2 rndVelocity = Util.generateRandomDirection();
          double rndSpeed = Util.generateRandomSpeed(10, 50);

          SoundedBall ball =
              SoundedBall(rndPosition, rndVelocity, rndSpeed, elapsedTicks);

          cameraComponent.world.add(ball);

          elapsedTicks++;

          if (elapsedTicks > numSimulationObjects) {
            interval.timer.stop();
            remove(interval);
          }
        },
        repeat: true);

    add(interval);
  }

  // @override
  // void update(double dt) {
  //   super.update(dt);
  //
  //   interval.update(dt);
  // }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    textConfig.render(canvas, 'Elapsed: $elapsedTicks', Vector2(30, 30));
    textConfig.render(canvas, 'Ball: ${cameraComponent.world.children.length}',
        Vector2(30, 50));
  }
}
