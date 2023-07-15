import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/palette.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/components/joystick_player.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends FlameGame with HasDraggablesBridge, TapDetector {
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

    add(player);
    add(joystick);
  }

  @override
  FutureOr<void> onLoad() {
    super.onLoad();

    loadJoystick();
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);
    textPaint.render(
        canvas, 'active: ${children.length}', Vector2(canvasSize.x, 0),
        anchor: Anchor.topRight);
  }

  @override
  void onTapUp(TapUpInfo info) {
    var velocity = Vector2(0, -1);
    velocity.rotate(player.angle);

    add(Bullet(player, velocity));

    super.onTapUp(info);
  }
}
