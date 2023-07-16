import 'package:flame/components.dart';
import 'package:hello_world/main.dart';

mixin KnowGameSize on HasGameRef<MyApp> {
  double get gameMinX => -gameRef.cameraComponent.viewport.size.x / 2;
  double get gameMinY => -gameRef.cameraComponent.viewport.size.y / 2;
  double get gameMaxX => gameRef.cameraComponent.viewport.size.x / 2;
  double get gameMaxY => gameRef.cameraComponent.viewport.size.y / 2;
}
