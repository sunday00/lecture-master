import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/palette.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class Square extends PositionComponent {
  Vector2 velocity = Vector2(0, 0).normalized() * 0;
  double squareSize;
  Paint color = BasicPalette.white.paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 0;

  Square({
    required Vector2 position,
    required this.velocity,
    required this.squareSize,
    required this.color,
  }) : super(position: position);

  @override
  FutureOr<void> onLoad() {
    super.onLoad();

    size.setValues(squareSize, squareSize);

    anchor = Anchor.center;
  }

  @override
  void update(double dt) {
    super.update(dt);

    position += velocity * dt;
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);
    canvas.drawRect(size.toRect(), color);
  }
}

class MyApp extends FlameGame with TapDetector, DoubleTapDetector {
  bool running = true;

  loadFps() {
    if (!kDebugMode) return;
    // info: opposite: kReleaseMode

    add(FpsTextComponent(
      textRenderer: TextPaint(
        style: const TextStyle(
          color: Colors.white,
          fontSize: 35,
        ),
      ),
      position: Vector2(0, 0),
    )..anchor = Anchor.topLeft);
  }

  @override
  FutureOr<void> onLoad() {
    loadFps();
    return super.onLoad();
  }

  @override
  void update(double dt) {
    super.update(dt);
  }

  @override
  void render(Canvas canvas) {
    canvas.drawPaint(Paint()..color = Colors.red.shade200);

    super.render(canvas);
  }

  @override
  void onTapUp(TapUpInfo info) {
    // print('TAP: ${info.eventPosition.game.x}, ${info.eventPosition.game.y}');
    final touchPoint = info.eventPosition.game;

    final handled = children.any((element) {
      if (element is Square && element.containsPoint(touchPoint)) {
        element.velocity.negate();
        return true;
      }
      return false;
    });

    if (!handled) {
      add(
        Square(
            position: touchPoint,
            squareSize: 45.0,
            velocity: Vector2(0, 1).normalized() * 50,
            color: (BasicPalette.red.paint()
              ..style = PaintingStyle.stroke
              ..strokeWidth = 2)),
      );
    }
  }

  @override
  void onDoubleTap() {
    if (running) {
      pauseEngine();
    } else {
      resumeEngine();
    }

    running = !running;
  }
}
