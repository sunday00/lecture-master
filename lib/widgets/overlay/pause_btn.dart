import 'package:flutter/material.dart';
import 'package:flutter_space_escape/game/game.dart';
import 'package:flutter_space_escape/widgets/overlay/pause_menu.dart';

class PauseBtn extends StatelessWidget {
  static const String id = 'PauseBtn';
  final SpaceEscapeGame gameRef;

  const PauseBtn({super.key, required this.gameRef});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 30),
      child: Align(
        alignment: Alignment.topLeft,
        child: TextButton(
          child: const Icon(
            Icons.pause_rounded,
            color: Colors.white,
          ),
          onPressed: () {
            gameRef.pauseEngine();
            gameRef.overlays.add(PauseMenu.id);
            gameRef.overlays.remove(PauseBtn.id);
          },
        ),
      ),
    );
  }
}
