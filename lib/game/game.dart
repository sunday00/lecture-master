import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/game.dart';
import 'package:flame/sprite.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/game/player.dart';

class SpaceEscapeGame extends FlameGame with PanDetector {
  // final World _world = World();

  Offset? _pointerStartPosition;
  Offset? _pointerCurrentPosition;
  late Player player;
  final double _joystickRad = 60;
  final int _deadZoneRad = 10;
  final int _speedRate = 3;

  loadCameraAndWorld() {
    // add(_world);
  }

  loadPlayer() async {
    await images.load('ships.png');

    final spriteSheet = SpriteSheet.fromColumnsAndRows(
      image: images.fromCache('ships.png'),
      columns: 8,
      rows: 6,
    );

    player = Player(
      sprite: spriteSheet.getSpriteById(5),
      size: Vector2(64, 64),
      position: canvasSize / 2,
    );

    player.anchor = Anchor.center;

    // _world.add(player);
    add(player);
  }

  @override
  FutureOr<void> onLoad() async {
    loadCameraAndWorld();
    loadPlayer();
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
}
