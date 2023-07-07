import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/game.dart';
import 'package:flame/input.dart';
import 'package:flame/sprite.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/game/bullet.dart';
import 'package:flutter_space_escape/game/enemy.dart';
import 'package:flutter_space_escape/game/enemy_manager.dart';
import 'package:flutter_space_escape/game/player.dart';

class SpaceEscapeGame extends FlameGame
    with PanDetector, TapDetector, HasCollisionDetection {
  // final World _world = World();

  late final spriteSheet;

  Offset? _pointerStartPosition;
  Offset? _pointerCurrentPosition;
  final double _joystickRad = 60;
  final int _deadZoneRad = 10;

  late Player player;
  final int _speedRate = 3;

  late Enemy enemy;
  late EnemyManager _enemyManager;

  late int _shootStart = DateTime.now().microsecondsSinceEpoch;
  int _shootSpeed = 300000;

  loadCameraAndWorld() async {
    await images.load('ships.png');

    spriteSheet = SpriteSheet.fromColumnsAndRows(
      image: images.fromCache('ships.png'),
      columns: 8,
      rows: 6,
    );

    // add(_world);
  }

  loadPlayer() {
    player = Player(
      sprite: spriteSheet.getSpriteById(5),
      size: Vector2(64, 64),
      position: Vector2(canvasSize.x / 2, canvasSize.y * 0.75),
    );

    player.anchor = Anchor.center;

    // _world.add(player);
    add(player);
  }

  loadEnemy() {
    //   enemy = Enemy(
    //     sprite: spriteSheet.getSpriteById(4),
    //     size: Vector2(32, 32),
    //     // position: Vector2(canvasSize.x / 2, canvasSize.y * 0.1),
    //     position: canvasSize / 2 + Vector2(0, -100),
    //   );
    //
    //   enemy.anchor = Anchor.center;
    //
    //   add(enemy);

    _enemyManager = EnemyManager(spriteSheet: spriteSheet);
    add(_enemyManager);
  }

  loadBullet(DateTime now) {
    int newShootTime = now.microsecondsSinceEpoch;

    if (_shootStart + _shootSpeed < newShootTime) {
      Bullet bullet = Bullet(
        sprite: spriteSheet.getSpriteById(29),
        size: Vector2(30, 30),
        position: player.position,
      );

      bullet.anchor = Anchor.center;

      add(bullet);

      _shootStart = newShootTime;
    }
  }

  @override
  FutureOr<void> onLoad() async {
    await loadCameraAndWorld();
    loadPlayer();
    loadEnemy();
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    if (_pointerStartPosition != null) {
      canvas.drawCircle(
        _pointerStartPosition!,
        _joystickRad,
        Paint()..color = Colors.grey.withAlpha(100),
      );
    }

    if (_pointerCurrentPosition != null) {
      var delta = _pointerCurrentPosition! - _pointerStartPosition!;

      if (delta.distance > _joystickRad) {
        delta = _pointerStartPosition! +
            (Vector2(delta.dx, delta.dy).normalized() * _joystickRad)
                .toOffset();
      } else {
        delta = _pointerCurrentPosition!;
      }

      canvas.drawCircle(
        delta,
        20,
        Paint()..color = Colors.grey.withAlpha(100),
      );
    }
  }

  @override
  void onPanStart(DragStartInfo info) {
    _pointerStartPosition = info.eventPosition.global.toOffset();
    _pointerCurrentPosition = info.eventPosition.global.toOffset();

    _shootStart = DateTime.now().microsecondsSinceEpoch;
    loadBullet(DateTime.now());
  }

  @override
  void onPanUpdate(DragUpdateInfo info) {
    _pointerCurrentPosition = info.eventPosition.global.toOffset();
    var delta = _pointerCurrentPosition! - _pointerStartPosition!;

    if (delta.distance < _deadZoneRad) {
      player.setMoveDirection(Vector2.zero(), 0);
    } else {
      player.setMoveDirection(
        Vector2(delta.dx, delta.dy),
        delta.distance * _speedRate,
      );
    }

    loadBullet(DateTime.now());
  }

  @override
  void onPanEnd(DragEndInfo info) {
    _pointerStartPosition = null;
    _pointerCurrentPosition = null;
    player.setMoveDirection(Vector2.zero(), 0);
  }

  @override
  void onPanCancel() {
    _pointerStartPosition = null;
    _pointerCurrentPosition = null;
    player.setMoveDirection(Vector2.zero(), 0);
  }

  @override
  void onTapDown(TapDownInfo info) {
    super.onTapDown(info);
    loadBullet(DateTime.now());
  }
}
