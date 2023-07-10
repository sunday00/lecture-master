import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/widgets/overlay/game_over.dart';
import 'package:flutter_space_escape/widgets/overlay/pause_btn.dart';

import '../widgets/overlay/pause_menu.dart';

SpaceEscapeGame _spaceEscapeGame = SpaceEscapeGame();

class GamePlay extends StatelessWidget {
  const GamePlay({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: WillPopScope(
        onWillPop: () async => false,
        child: GameWidget(
          game: _spaceEscapeGame,
          initialActiveOverlays: const [
            PauseBtn.id,
          ],
          overlayBuilderMap: {
            PauseBtn.id: (BuildContext context, SpaceEscapeGame gameRef) =>
                PauseBtn(
                  gameRef: gameRef,
                ),
            PauseMenu.id: (BuildContext context, SpaceEscapeGame gameRef) =>
                PauseMenu(
                  gameRef: gameRef,
                ),
            GameOver.id: (BuildContext context, SpaceEscapeGame gameRef) =>
                GameOver(
                  gameRef: gameRef,
                ),
          },
        ),
      ),
    );
  }
}
