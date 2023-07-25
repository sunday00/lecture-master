import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flame/parallax.dart';
import 'package:flutter/material.dart';

import 'my_game.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();
  Flame.device.setLandscape(); // screen horizontal

  runApp(GameWidget(
    game: MyApp(),
  ));
}

class MyApp extends MyGame with HasCollisionDetection {
  final _imageNames = [
    ParallaxImageData('bg.png'),
    ParallaxImageData('mountain-far.png'),
    ParallaxImageData('mountains.png'),
    ParallaxImageData('trees.png'),
    ParallaxImageData('foreground-trees.png'),
  ];

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    final parallax = await loadParallaxComponent(_imageNames,
        baseVelocity: Vector2(10.0, 0.0), // speed
        velocityMultiplierDelta: Vector2(2, 0),
        repeat: ImageRepeat.repeat); // difference speed between images
    add(parallax);
  }
}
