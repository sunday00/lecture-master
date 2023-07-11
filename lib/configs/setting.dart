import 'package:flutter/foundation.dart';
import 'package:hive/hive.dart';

part 'setting.g.dart';

@HiveType(typeId: 2)
class Setting extends ChangeNotifier with HiveObjectMixin {
  static const String SETTING_BOX = 'SettingBox';
  static const String SETTING_KEY = 'Setting';

  @HiveField(0)
  bool _sfx = false;
  bool get soundEffects => _sfx;
  set soundEffects(bool value) {
    _sfx = value;
    notifyListeners();
    save();
  }

  Setting({
    bool soundEffects = true,
  }) : _sfx = soundEffects;
}
