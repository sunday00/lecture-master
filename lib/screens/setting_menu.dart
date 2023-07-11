import 'package:flutter/material.dart';
import 'package:flutter_space_escape/configs/setting.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';
import 'package:provider/provider.dart';

class SettingMenu extends StatelessWidget {
  const SettingMenu({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: Text(
                'Setting',
                style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                  fontSize: 50,
                  // color: Colors.white,
                  shadows: [
                    const Shadow(
                      blurRadius: 20,
                      color: Colors.white,
                      offset: Offset(0, 0),
                    )
                  ],
                ),
              ),
            ),
            Selector<Setting, bool>(
              selector: (context, setting) => setting.soundEffects,
              builder: (context, value, child) {
                return SwitchListTile(
                    title: const Text('Sound Effect'),
                    value: value,
                    onChanged: (newValue) {
                      Provider.of<Setting>(context, listen: false)
                          .soundEffects = newValue;
                    });
              },
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width / 3,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => const MainMenu()),
                  );
                },
                child: const Icon(Icons.arrow_back_ios_rounded),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
