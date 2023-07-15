import 'dart:async';
import 'dart:math';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/palette.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'components/LifeBar.dart';

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
  double rotationSpeed;
  Paint color = BasicPalette.white.paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 0;
  late LifeBar lifeBar;

  Square({
    required Vector2 position,
    required this.velocity,
    required this.squareSize,
    required this.rotationSpeed,
    required this.color,
  }) : super(position: position);

  createLifeBar() {
    lifeBar = LifeBar.initData(size,
        size: Vector2(size.x - 10, 5), placement: LifeBarPlacement.center);
    add(lifeBar);
  }

  @override
  FutureOr<void> onLoad() {
    super.onLoad();

    size.setValues(squareSize, squareSize);

    anchor = Anchor.center;

    createLifeBar();
  }

  @override
  void update(double dt) {
    super.update(dt);

    position += velocity * dt;

    angle = (angle - (dt * rotationSpeed)) % (2 * pi);
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);
    canvas.drawRect(size.toRect(), color);
  }

  processHit() {
    lifeBar.decrementCurrentLifeBy(10);
  }
}

class MyApp extends FlameGame with TapDetector, DoubleTapDetector {
  bool running = true;

  @override
  bool get debugMode {
    super.debugMode;
    return kDebugMode;
  }

  final TextPaint textPaint = TextPaint(
    style: const TextStyle(
      fontSize: 36.0,
      fontFamily: 'Awesome Font',
    ),
  );

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

    textPaint.render(
        canvas, 'active: ${children.length}', Vector2(canvasSize.x, 0),
        anchor: Anchor.topRight);

    super.render(canvas);
  }

  @override
  void onTapUp(TapUpInfo info) {
    // print('TAP: ${info.eventPosition.game.x}, ${info.eventPosition.game.y}');
    final touchPoint = info.eventPosition.game;

    final handled = children.any((element) {
      if (element is Square && element.containsPoint(touchPoint)) {
        element.velocity.negate();
        element.processHit();
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
            rotationSpeed: 0.3,
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
