import 'dart:async';
import 'dart:math';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/palette.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/utils/component_utils.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class Asteroid extends PositionComponent with HasGameRef<MyApp> {
  Vector2 velocity = Vector2(0, 25);
  double polygonSize;
  double rotationSpeed = 0.3;
  Paint paint = Paint();

  final vertices = ([
    Vector2(0.2, 0.8), // v1
    Vector2(-0.6, 0.6), // v2
    Vector2(-0.8, 0.2), // v3
    Vector2(-0.6, -0.4), // v4
    Vector2(-0.4, -0.8), // v5
    Vector2(0.0, -1.0), // v6
    Vector2(0.4, -0.6), // v7
    Vector2(0.8, -0.8), // v8
    Vector2(1.0, 0.0), // v9
    Vector2(0.4, 0.2), // v10
    Vector2(0.7, 0.6), // v1
  ]);

  late PolygonComponent asteroid;

  Asteroid({
    required position,
    required this.polygonSize,
    required this.velocity,
    required this.paint,
  }) : super(
          position: position,
        );

  @override
  FutureOr<void> onLoad() {
    super.onLoad();

    asteroid = PolygonComponent.relative(
      vertices,
      parentSize: Vector2.all(polygonSize),
      position: position,
      paint: paint,
    );

    anchor = Anchor.center;
  }

  @override
  void update(double dt) {
    super.update(dt);

    position += velocity * dt;

    angle = (angle - (dt * rotationSpeed)) % (2 * pi);

    if (Util.isPositionOutOfBounds(gameRef.size, position)) {
      gameRef.remove(this);
    }
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);
    asteroid.render(canvas);
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
      if (element is Asteroid && element.containsPoint(touchPoint)) {
        element.velocity.negate();
        return true;
      }
      return false;
    });

    if (!handled) {
      add(
        Asteroid(
            position: touchPoint,
            polygonSize: 100.0,
            velocity: Vector2(0, 1).normalized() * 25,
            paint: (BasicPalette.red.paint()
              ..style = PaintingStyle.stroke
              ..strokeWidth = 3)),
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
