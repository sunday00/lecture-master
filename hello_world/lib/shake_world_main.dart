import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/effects.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/palette.dart';
import 'package:flame_audio/flame_audio.dart';
import 'package:flame_noise/flame_noise.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/components/joystick_player.dart';

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

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends FlameGame with HasDraggablesBridge, TapDetector {
  @override
  bool get debugMode => kDebugMode;

  late final CameraComponent cameraComponent;
  final World world = World();

  late final JoystickPlayer player;
  late final JoystickComponent joystick;

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

  loadJoystick() {
    final knobPaint = BasicPalette.green.withAlpha(200).paint();
    final backgroundPaint = BasicPalette.green.withAlpha(100).paint();

    joystick = JoystickComponent(
      knob: CircleComponent(radius: 15, paint: knobPaint),
      background: CircleComponent(radius: 50, paint: backgroundPaint),
      // screen position margin
      margin: const EdgeInsets.only(left: 20, bottom: 20),
    );

    player = JoystickPlayer(joystick);

    cameraComponent.world.add(player);
    cameraComponent.viewport.add(joystick);
  }

  loadBgm() async {
    FlameAudio.bgm.initialize();

    if (!FlameAudio.bgm.isPlaying && !kDebugMode) {
      FlameAudio.bgm.play('race_to_mars.mp3');
    }

    FlameAudio.audioCache.load('laser_004.wav');
  }

  @override
  FutureOr<void> onLoad() {
    super.onLoad();

    loadWorldAndCamera();
    loadJoystick();
    loadBgm();
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
  void onTapUp(TapUpInfo info) {
    var velocity = Vector2(0, -1);
    velocity.rotate(player.angle);

    world.add(Bullet(player, velocity));

    super.onTapUp(info);
  }

  @override
  void lifecycleStateChange(AppLifecycleState state) {
    switch (state) {
      case AppLifecycleState.resumed:
        FlameAudio.bgm.resume();
        break;
      case AppLifecycleState.inactive:
      case AppLifecycleState.paused:
      case AppLifecycleState.detached:
        FlameAudio.bgm.stop();
        break;
    }

    super.lifecycleStateChange(state);
  }
}
