import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/effects.dart';
import 'package:flame/game.dart';
import 'package:flame/input.dart';
import 'package:flame_noise/flame_noise.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

mixin KnowGameSize on HasGameRef<MyGame> {
  double get gameMinX => gameRef.cameraComponent.minX;
  double get gameMinY => gameRef.cameraComponent.minY;
  double get gameMaxX => gameRef.cameraComponent.maxX;
  double get gameMaxY => gameRef.cameraComponent.maxY;
}

extension CameraHelep on CameraComponent {
  void shake() {
    viewport.add(
      MoveEffect.by(
        Vector2(20, 20),
        PerlinNoiseEffectController(
          duration: 1.0,
          frequency: 100,
          taperingCurve: Curves.linear,
        ),
      ),
    );
  }

  double get minX => -viewport.size.x / 2;
  double get minY => -viewport.size.y / 2;
  double get maxX => viewport.size.x / 2;
  double get maxY => viewport.size.y / 2;
}

extension TapEventHelper on EventPosition {
  Vector2 world(Vector2 gameSize) {
    return game - (gameSize / 2);
  }
}

class MyGame extends FlameGame {
  @override
  bool get debugMode => kDebugMode;

  late final CameraComponent cameraComponent;
  final World world = World();

  final TextPaint textPaint = TextPaint(
    style: const TextStyle(
      fontSize: 36.0,
      fontFamily: 'Awesome Font',
    ),
  );

  renderHUDChildren(Canvas canvas) {
    textPaint.render(
        canvas, 'active: ${children.length}', Vector2(canvasSize.x, 0),
        anchor: Anchor.topRight);
  }

  loadWorldAndCamera() {
    cameraComponent = CameraComponent(world: world);

    addAll([cameraComponent, world]);
  }

  @override
  @mustCallSuper
  FutureOr<void> onLoad() async {
    super.onLoad();

    loadWorldAndCamera();

    world.add(ScreenHitbox()..anchor = Anchor.center);
  }

  @override
  @mustCallSuper
  void render(Canvas canvas) {
    super.render(canvas);

    textPaint.render(
        canvas, 'active: ${world.children.length}', Vector2(canvasSize.x, 0),
        anchor: Anchor.topRight);
  }
}
