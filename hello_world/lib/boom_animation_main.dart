import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/particles.dart';
import 'package:flame/sprite.dart';
import 'package:flutter/material.dart';
import 'package:hello_world/my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with TapDetector {
  getBoomAnimation() {
    final img = images.fromCache('boom.png');
    final sheet =
        SpriteSheet.fromColumnsAndRows(image: img, columns: 8, rows: 8);

    return SpriteAnimation(
      List<SpriteAnimationFrame>.generate(
          64,
          (i) => SpriteAnimationFrame(
              sheet.getSpriteById(i), 0.1)), // this is  NOT animation speed
      loop: false,
    );
  }

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();
    await images.load('boom.png');
  }

  @override
  void onTapUp(TapUpInfo info) {
    Vector2 position = info.eventPosition.game;
    position.sub(Vector2(0, 50));

    add(ParticleSystemComponent(
      position: position,
      anchor: Anchor.center,
      particle: AcceleratedParticle(
        lifespan: 0.5, // this is animation speed
        child: SpriteAnimationParticle(
          animation: getBoomAnimation(),
          size: Vector2(300, 300),
          anchor: Anchor.center,
          alignAnimationTime: true,
        ),
      ),
    ));
  }
}
