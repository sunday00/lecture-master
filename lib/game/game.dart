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
import 'package:flutter_space_escape/models/player_data.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';
import 'package:flutter_space_escape/widgets/overlay/game_over.dart';
import 'package:provider/provider.dart';

import '../widgets/overlay/pause_btn.dart';
import '../widgets/overlay/pause_menu.dart';
import 'command.dart';

class SpaceEscapeGame extends FlameGame
    with PanDetector, TapDetector, HasCollisionDetection {
  // final World _world = World();

  late final spriteSheet;
  // CameraComponent cameraComponent = CameraComponent(world: World());

  Offset? _pointerStartPosition;
  Offset? _pointerCurrentPosition;
  final double _joystickRad = 60;
  final int _deadZoneRad = 10;

  late Player player;
  late PlayerData playerData;
  final int _speedRate = 3;

  late Enemy enemy;
  late EnemyManager _enemyManager;

  late int _shootStart = DateTime.now().microsecondsSinceEpoch;
  int _shootSpeed = 300000;

  late TextComponent _playerScoreText;
  late TextComponent _playerHealthText;

  final _commandList = List<Command>.empty(growable: true);
  final _addLaterCommandList = List<Command>.empty(growable: true);

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
    final spaceshipType = SpaceshipType.Albatross;
    final spaceship = Spaceship.getSpaceshipByType(spaceshipType);

    player = Player(
      spaceshipType: spaceshipType,
      sprite: spriteSheet.getSpriteById(spaceship.spriteId),
      size: Vector2(64, 64),
      position: Vector2(canvasSize.x / 2, canvasSize.y * 0.75),
    );

    player.anchor = Anchor.center;

    // _world.add(player);
    add(player);

    _shootSpeed = 1400000 - spaceship.shootSpeed * 100;
  }

  loadEnemy() {
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

  loadJoystick() {
    // final joystick = JoystickComponent();
    //
    // add(joystick);
  }

  loadText() {
    _playerScoreText = TextComponent(
      text: 'Score: 100',
      position: Vector2(20, 20),
      textRenderer: TextPaint(
        style: const TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
    );

    add(_playerScoreText);

    _playerHealthText = TextComponent(
      text: 'Health: 0',
      position: Vector2(canvasSize.x - 20, 20),
      textRenderer: TextPaint(
        style: const TextStyle(
          color: Colors.white,
          fontSize: 16,
        ),
      ),
    );

    _playerHealthText.anchor = Anchor.topRight;

    add(_playerHealthText);
  }

  @override
  void onAttach() {
    if (buildContext != null) {
      playerData = Provider.of<PlayerData>(buildContext!, listen: false);
      player.setSpaceshipType(playerData.spaceshipType);

      _shootSpeed = 1400000 -
          Spaceship.getSpaceshipByType(player.spaceshipType).shootSpeed * 100;
    }
    super.onAttach();
  }

  @override
  FutureOr<void> onLoad() async {
    await loadCameraAndWorld();
    loadPlayer();
    loadEnemy();
    loadJoystick();
    loadText();
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

    canvas.drawRect(
      Rect.fromLTWH(
          canvasSize.x -
              (Spaceship.getSpaceshipByType(player.spaceshipType).health / 2 +
                  20),
          40,
          player.health.toDouble() / 2,
          20),
      Paint()..color = Colors.blue[500]!,
    );
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

  @override
  void update(double dt) {
    super.update(dt);

    for (var command in _commandList) {
      for (var component in children) {
        command.run(component);
      }
    }
    _commandList.clear();
    _commandList.addAll(_addLaterCommandList);
    _addLaterCommandList.clear();

    _playerScoreText.text = 'Score: ${player.score}';
    _playerHealthText.text = 'Health: ${player.health}';

    if (player.health <= 0 && !camera.shaking) {
      player.shape.removeFromParent();
      player.particleComponent.removeFromParent();
      player.removeFromParent();
      // pauseEngine();
      overlays.remove(PauseBtn.id);
      overlays.add(GameOver.id);
    }
  }

  @override
  void lifecycleStateChange(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.resumed:
        break;
      case AppLifecycleState.inactive:
      case AppLifecycleState.paused:
      case AppLifecycleState.detached:
        if (player.health > 0) {
          pauseEngine();
          overlays.remove(PauseBtn.id);
          overlays.add(PauseMenu.id);
        }
        break;
    }

    super.lifecycleStateChange(state);
  }

  void addCommand(Command command) {
    _addLaterCommandList.add(command);
  }

  void reset() {
    if (player.isRemoved) {
      add(player);
    }

    player.reset();

    _enemyManager.reset();

    children.whereType<Enemy>().forEach((element) {
      element.removeFromParent();
    });

    children.whereType<Bullet>().forEach((element) {
      element.removeFromParent();
    });
  }
}
