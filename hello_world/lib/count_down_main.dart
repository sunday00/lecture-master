import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import 'my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with TapDetector {
  late Timer countdown;
  late Timer interval;

  late TimerComponent countdownComponent;
  late TimerComponent intervalComponent;

  int elapsedTicks = 0;
  int elapsedTicksForComponent = 0;

  double countMax = 5.00;
  double currentCount = 5.00;

  double countMaxForComponent = 5.00;
  double currentCountForComponent = 5.00;

  defineTimer() {
    countdown = Timer(
      countMax,
      onTick: () {
        print('countdown');
        if (countdown.finished) {
          print('stop');
        }
      },
      autoStart: false,
    );

    interval = Timer(
      0.01,
      onTick: () => elapsedTicks++,
      repeat: true,
    );

    countdownComponent = TimerComponent(
      period: 5,
      removeOnFinish: false, // this is for memory.
      onTick: () {
        print('countdown component');
        if (countdownComponent.timer.finished) {
          print('component stop');
        }
      },
      autoStart: false,
    );

    add(countdownComponent);

    intervalComponent = TimerComponent(
      period: 0.1,
      onTick: () => elapsedTicksForComponent++,
      repeat: true,
    );

    add(intervalComponent);
  }

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    defineTimer();
  }

  @override
  void update(double dt) {
    super.update(dt);

    countdown.update(dt);
    interval.update(dt);

    updateCurrentCount();
  }

  updateCurrentCount() {
    currentCount = countMax - countdown.current;
    currentCount = currentCount.clamp(0, 5);

    currentCountForComponent =
        countMaxForComponent - countdownComponent.timer.current;
    currentCountForComponent = currentCountForComponent.clamp(0, 5);
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    textPaint.render(
      canvas,
      'countdown: ${currentCount.toStringAsFixed(3)}',
      Vector2(30, 100),
    );

    textPaint.render(
      canvas,
      'elapsed: $elapsedTicks',
      Vector2(30, 130),
    );

    textPaint.render(
      canvas,
      'countdown: ${currentCountForComponent.toStringAsFixed(3)}',
      Vector2(30, 160),
    );

    textPaint.render(
      canvas,
      'elapsed: $elapsedTicksForComponent',
      Vector2(30, 190),
    );
  }

  @override
  void onTapDown(TapDownInfo info) {
    countdown.start();
    countdownComponent.timer.start();
  }
}
