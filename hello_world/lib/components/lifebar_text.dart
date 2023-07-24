import 'dart:async';

import 'package:flame/components.dart';
import 'package:flutter/material.dart';

class LifeBarText extends TextComponent {
  final TextPaint textBallStats = TextPaint(
    style: const TextStyle(color: Colors.amberAccent, fontSize: 10),
  );

  int _ordinalNumber = 0;
  int healthData = 0;

  LifeBarText(int ordinalNumber) {
    _ordinalNumber = ordinalNumber;
  }

  @override
  FutureOr<void> onLoad() {
    textRenderer = textBallStats;
    return super.onLoad();
  }

  @override
  void update(double dt) {
    text = '${_ordinalNumber.toInt()}'
        '- ${healthData.toInt()}';
    super.update(dt);
  }
}
