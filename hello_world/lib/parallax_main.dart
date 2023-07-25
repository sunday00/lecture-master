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
  // final _imageNames = [
  //   ParallaxImageData('bg.png'),
  //   ParallaxImageData('mountain-far.png'),
  //   ParallaxImageData('mountains.png'),
  //   ParallaxImageData('trees.png'),
  //   ParallaxImageData('foreground-trees.png'),
  // ];
  final _imageNames = {
    'bg.png': 1.0,
    'mountain-far.png': 1.5,
    'mountains.png': 2.3,
    'trees.png': 5.0,
    'foreground-trees.png': 24.0,
  };

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    final layers = _imageNames.entries.map(
      (e) => loadParallaxLayer(
        ParallaxImageData(e.key),
        velocityMultiplier: Vector2(e.value, 1.0),
      ),
    );

    // final parallax = await loadParallaxComponent(_imageNames,
    //     baseVelocity: Vector2(10.0, 0.0), // speed
    //     velocityMultiplierDelta: Vector2(2, 0),
    //     repeat: ImageRepeat.repeat); // difference speed between images

    final parallax = ParallaxComponent(
      parallax:
          Parallax(await Future.wait(layers), baseVelocity: Vector2(20, 0)),
    );

    add(parallax);
  }
}
