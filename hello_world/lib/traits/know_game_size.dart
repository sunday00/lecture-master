import 'package:flame/components.dart';
import 'package:hello_world/main.dart';

mixin KnowGameSize on HasGameRef<MyApp> {
  double get gameMinX => gameRef.cameraComponent.minX;
  double get gameMinY => gameRef.cameraComponent.minY;
  double get gameMaxX => gameRef.cameraComponent.maxX;
  double get gameMaxY => gameRef.cameraComponent.maxY;
}
