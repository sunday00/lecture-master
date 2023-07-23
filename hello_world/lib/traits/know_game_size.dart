import 'package:flame/components.dart';
import 'package:hello_world/my_game.dart';

mixin KnowGameSize on HasGameRef<MyGame> {
  double get gameMinX => gameRef.cameraComponent.minX;
  double get gameMinY => gameRef.cameraComponent.minY;
  double get gameMaxX => gameRef.cameraComponent.maxX;
  double get gameMaxY => gameRef.cameraComponent.maxY;
}
