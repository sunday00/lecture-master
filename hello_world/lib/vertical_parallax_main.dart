import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/palette.dart';
import 'package:flame/parallax.dart';
import 'package:flame_audio/flame_audio.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/components/joystick_player.dart';
import 'package:hello_world/my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with HasDraggablesBridge, TapDetector {
  @override
  bool get debugMode => kDebugMode;

  late final JoystickPlayer player;
  late final JoystickComponent joystick;

  late final ParallaxComponent parallax;
  final double parallaxSpeed = 25.0;
  final _backgroundImages = [
    ParallaxImageData('small_stars.png'),
    ParallaxImageData('big_stars.png'),
  ];

  loadBackground() async {
    parallax = await loadParallaxComponent(
      _backgroundImages,
      baseVelocity: Vector2(0, -parallaxSpeed),
      velocityMultiplierDelta: Vector2(1.0, 1.8),
      repeat: ImageRepeat.repeat,
    );

    add(parallax);
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
  FutureOr<void> onLoad() async {
    super.onLoad();

    loadBackground();
    loadJoystick();
    loadBgm();
  }

  @override
  void update(double dt) {
    parallax.parallax?.baseVelocity = player.currentVelocity == Vector2.zero() ? Vector2(0, -parallaxSpeed) : player.currentVelocity;
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