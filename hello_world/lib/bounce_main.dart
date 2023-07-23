import 'dart:async';
import 'dart:math';

import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flame/effects.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/input.dart';
import 'package:flame_noise/flame_noise.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

mixin KnowGameSize on HasGameRef<MyApp> {
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

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends FlameGame with TapDetector, HasCollisionDetection {
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
  FutureOr<void> onLoad() async {
    super.onLoad();

    loadWorldAndCamera();

    world.add(ScreenHitbox()..anchor = Anchor.center);
  }

  @override
  void update(double dt) {
    super.update(dt);
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    textPaint.render(
        canvas, 'active: ${world.children.length}', Vector2(canvasSize.x, 0),
        anchor: Anchor.topRight);
  }

  @override
  void onTapDown(TapDownInfo info) {
    world.add(CircleObj(info.eventPosition.world(size)));
  }
}

class CircleObj extends PositionComponent
    with HasGameRef<MyApp>, CollisionCallbacks, KnowGameSize {
  late Vector2 velocity;
  final _collisionColor = Colors.amber;
  final _defaultColor = Colors.cyan;
  Color _currentColor = Colors.cyan;
  bool _isWallHit = false;
  bool _isCollision = false;
  final double _speed = 150 + Random().nextDouble() * 300;

  CircleObj(Vector2 position)
      : super(
          position: position,
          size: Vector2.all(16),
          anchor: Anchor.center,
        ) {
    add(CircleHitbox(radius: 16, anchor: Anchor.center));
  }

  @override
  FutureOr<void> onLoad() {
    super.onLoad();
    velocity = (-position)..scaleTo(_speed);
  }

  @override
  void update(double dt) {
    super.update(dt);
    if (_isWallHit) {
      // removeFromParent();
      return;
    } else {
      _currentColor = _isCollision ? _collisionColor : _defaultColor;
      position.add(velocity * dt);
      _isCollision = false;
    }
  }

  @override
  void render(Canvas canvas) {
    canvas.drawCircle(
        Vector2.zero().toOffset(), 8, Paint()..color = _currentColor);
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    if (other is ScreenHitbox) {
      // _isWallHit = true;
      // velocity = -velocity;
      if (intersectionPoints.first.x <= gameMinX ||
          intersectionPoints.first.x >= gameMaxX) {
        velocity.x = -velocity.x;
      }

      if (intersectionPoints.first.y <= gameMinY ||
          intersectionPoints.first.y >= gameMaxY) {
        velocity.y = -velocity.y;
      }

      return;
    }

    _isCollision = true;

    super.onCollision(intersectionPoints, other);
  }
}
