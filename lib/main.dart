import 'package:flame/flame.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';
import 'package:google_fonts/google_fonts.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();
  // runApp(GameWidget(game: SpaceEscapeGame()));
  runApp(MaterialApp(
    themeMode: ThemeMode.dark,
    darkTheme: ThemeData.dark().copyWith(
      textTheme: GoogleFonts.bungeeInlineTextTheme(),
      scaffoldBackgroundColor: Colors.black,
    ),
    home: const MainMenu(),
  ));
}
