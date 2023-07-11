import 'package:flame/flame.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/models/player_data.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:path_provider/path_provider.dart';
import 'package:provider/provider.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Flame.device.fullScreen();
  // runApp(GameWidget(game: SpaceEscapeGame()));

  runApp(
    FutureProvider(
      create: (BuildContext context) => getPlayerData(),
      initialData: PlayerData.fromMap(PlayerData.defaultData),
      builder: (context, child) {
        return ChangeNotifierProvider<PlayerData>.value(
          value: Provider.of<PlayerData>(context),
          child: child,
        );
      },
      child: MaterialApp(
        themeMode: ThemeMode.dark,
        darkTheme: ThemeData.dark().copyWith(
          textTheme: GoogleFonts.bungeeInlineTextTheme(
            const TextTheme(
              displayMedium: TextStyle(
                color: Colors.white,
              ),
            ),
          ),
          scaffoldBackgroundColor: Colors.black,
        ),
        home: const MainMenu(),
      ),
    ),
  );
}

Future<void> initHive() async {
  final dir = await getApplicationDocumentsDirectory();

  await Hive.initFlutter(dir.path);

  Hive.registerAdapter(PlayerDataAdapter());
  Hive.registerAdapter(SpaceshipTypeAdapter());
}

Future<PlayerData> getPlayerData() async {
  await initHive();

  final box = await Hive.openBox<PlayerData>('PlayerData');
  final playerData = box.get('PlayerData');
  if (playerData == null) {
    box.put('PlayerData', PlayerData.fromMap(PlayerData.defaultData));
  }

  return playerData!;
}
