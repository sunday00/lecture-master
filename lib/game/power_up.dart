import 'package:flame/collisions.dart';
import 'package:flame/components.dart';
import 'package:flutter_space_escape/game/enemy.dart';
import 'package:flutter_space_escape/game/enemy_manager.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/game/player.dart';
import 'package:flutter_space_escape/game/power_up_manager.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';

import 'audio_player_component.dart';
import 'command.dart';

abstract class PowerUp extends SpriteComponent
    with HasGameRef<SpaceEscapeGame>, CollisionCallbacks {
  late Timer _timer;

  Sprite getSprite();
  void onActivate();

  PowerUp({
    required Sprite sprite,
    Vector2? position,
    Vector2? size,
  }) : super(position: position, size: size, sprite: sprite) {
    _timer = Timer(20, onTick: removeFromParent);
  }

  @override
  void update(double dt) {
    _timer.update(dt);
    super.update(dt);
  }

  @override
  void onMount() {
    final shape = CircleHitbox();
    add(shape);

    sprite = getSprite();

    _timer.start();
    super.onMount();
  }

  @override
  void onCollision(Set<Vector2> intersectionPoints, PositionComponent other) {
    if (other is Player) {
      onActivate();

      gameRef.addCommand(Command<AudioPlayerComponent>(action: (audio) {
        audio.play('power.ogg');
      }));

      removeFromParent();
    }

    super.onCollision(intersectionPoints, other);
  }
}

class Nuke extends PowerUp {
  Nuke({required Sprite sprite, Vector2? position, Vector2? size})
      : super(sprite: sprite, position: position, size: size);

  @override
  Sprite getSprite() {
    return sprite!;
  }

  @override
  void onActivate() {
    final command = Command<Enemy>(action: (target) {
      target.destroy();
    });

    gameRef.addCommand(command);
  }
}

class Health extends PowerUp {
  Health({required Sprite sprite, Vector2? position, Vector2? size})
      : super(sprite: sprite, position: position, size: size);

  @override
  Sprite getSprite() {
    return sprite!;
  }

  @override
  void onActivate() {
    final command = Command<Player>(action: (target) {
      int maxPoint = Spaceship.getSpaceshipByType(target.spaceshipType).health;
      int point = target.health + 30 > maxPoint ? maxPoint : target.health + 30;

      target.setHealth(point);
    });

    gameRef.addCommand(command);
  }
}

class Freeze extends PowerUp {
  Freeze({required Sprite sprite, Vector2? position, Vector2? size})
      : super(sprite: sprite, position: position, size: size);

  @override
  Sprite getSprite() {
    return sprite!;
  }

  @override
  void onActivate() {
    final command = Command<Enemy>(action: (target) {
      target.freeze();
    });

    final command2 = Command<EnemyManager>(action: (target) {
      target.freeze();
    });

    final command3 = Command<PowerUpManager>(action: (target) {
      target.freeze();
    });

    gameRef.addCommand(command);
    gameRef.addCommand(command2);
    gameRef.addCommand(command3);
  }
}

class MultiShot extends PowerUp {
  MultiShot({required Sprite sprite, Vector2? position, Vector2? size})
      : super(sprite: sprite, position: position, size: size);

  @override
  Sprite getSprite() {
    return sprite!;
  }

  @override
  void onActivate() {
    final command = Command<Player>(action: (target) {
      target.multiShot();
    });

    gameRef.addCommand(command);
  }
}
