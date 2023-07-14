import 'dart:async';
import 'dart:math';

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
  double rotationSpeed;
  Paint color = BasicPalette.white.paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = 0;

  List<RectangleComponent> lifeBarElements = List<RectangleComponent>.filled(
    3,
    RectangleComponent(
      size: Vector2(1, 1),
    ),
    growable: true,
  );

  Square({
    required Vector2 position,
    required this.velocity,
    required this.squareSize,
    required this.rotationSpeed,
    required this.color,
  }) : super(position: position);

  createLifeBar() {
    var lifeBarSize = Vector2(40, 10);
    var backgroundFillColor = Paint()
      ..color = Colors.grey.withOpacity(0.35)
      ..style = PaintingStyle.fill;
    var outlineColor = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1;
    var lifeDangerColor = Paint()
      ..color = Colors.red
      ..style = PaintingStyle.fill;

    lifeBarElements = [
      RectangleComponent(
        position: Vector2(size.x - lifeBarSize.x, -lifeBarSize.y - 2),
        size: lifeBarSize,
        angle: 0,
        paint: outlineColor,
      ),
      RectangleComponent(
        position: Vector2(size.x - lifeBarSize.x, -lifeBarSize.y - 2),
        size: lifeBarSize,
        angle: 0,
        paint: backgroundFillColor,
      ),
      RectangleComponent(
        position: Vector2(size.x - lifeBarSize.x, -lifeBarSize.y - 2),
        size: Vector2(10, 10),
        angle: 0,
        paint: lifeDangerColor,
      ),
    ];

    addAll(lifeBarElements);
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
        // element.velocity.negate();
        element.rotationSpeed = -element.rotationSpeed;
        // remove(element);
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
            // normalize: 대각선 이동 등을 할때 가로 세로보다 대각선이 길어지는 현상때문에
            // 대각선 이동시 더 빨라지는 현상을 막기 위해 벡터 값을 표준화 하는 메서드
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
