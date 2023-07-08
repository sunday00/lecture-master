import 'package:flame/flame.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/models/player_data.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();
  // runApp(GameWidget(game: SpaceEscapeGame()));
  runApp(
    ChangeNotifierProvider(
      create: (context) => PlayerData.fromMap(PlayerData.defaultData),
      child: MaterialApp(
        themeMode: ThemeMode.dark,
        darkTheme: ThemeData.dark().copyWith(
          textTheme: GoogleFonts.bungeeInlineTextTheme(),
          scaffoldBackgroundColor: Colors.black,
        ),
        home: const MainMenu(),
      ),
    ),
  );
}
