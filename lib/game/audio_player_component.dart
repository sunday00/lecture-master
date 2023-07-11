import 'dart:async';

import 'package:flame/components.dart';
import 'package:flame_audio/flame_audio.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:provider/provider.dart';

import '../configs/setting.dart';

class AudioPlayerComponent extends Component with HasGameRef<SpaceEscapeGame> {
  @override
  FutureOr<void> onLoad() async {
    await FlameAudio.audioCache.loadAll([
      'boom.ogg',
      'power.ogg',
      'shot.ogg',
    ]);

    return super.onLoad();
  }

  void play(String filename) {
    if (gameRef.buildContext != null &&
        Provider.of<Setting>(gameRef.buildContext!, listen: false)
            .soundEffects) {
      FlameAudio.play(filename, volume: 1.0);
    }
  }
}
