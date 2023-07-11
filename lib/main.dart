import 'package:flame/flame.dart';
import 'package:flutter/material.dart';
import 'package:flutter_space_escape/configs/setting.dart';
import 'package:flutter_space_escape/models/player_data.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:path_provider/path_provider.dart';
import 'package:provider/provider.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Flame.device.fullScreen();
  // runApp(GameWidget(game: SpaceEscapeGame()));

  await initHive();

  runApp(
    MultiProvider(
      providers: [
        FutureProvider<PlayerData>(
          create: (BuildContext context) => getPlayerData(),
          initialData: PlayerData.fromMap(PlayerData.defaultData),
        ),
        FutureProvider<Setting>(
          create: (BuildContext context) => getSetting(),
          initialData: Setting(soundEffects: true),
        ),
      ],
      builder: (context, child) {
        return MultiProvider(
          providers: [
            ChangeNotifierProvider<PlayerData>.value(
              value: Provider.of<PlayerData>(context),
            ),
            ChangeNotifierProvider<Setting>.value(
              value: Provider.of<Setting>(context),
            ),
          ],
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
  Hive.registerAdapter(SettingAdapter());
}

Future<PlayerData> getPlayerData() async {
  final box = await Hive.openBox<PlayerData>('PlayerData');
  final playerData = box.get('PlayerData');
  if (playerData == null) {
    box.put('PlayerData', PlayerData.fromMap(PlayerData.defaultData));
  }

  return playerData!;
}

Future<Setting> getSetting() async {
  final box = await Hive.openBox<Setting>(Setting.SETTING_BOX);
  final setting = box.get(Setting.SETTING_KEY);
  if (setting == null) {
    box.put(Setting.SETTING_KEY, Setting(soundEffects: true));
  }

  return setting!;
}
