import 'package:flutter/material.dart';
import 'package:flutter_space_escape/screens/select_spaceship.dart';

class MainMenu extends StatelessWidget {
  const MainMenu({super.key});

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
                'SpaceEscape',
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
            SizedBox(
              width: MediaQuery.of(context).size.width / 3,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(
                        builder: (context) => const SelectSpaceship()),
                  );
                },
                child: const Text('Play'),
              ),
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width / 3,
              child: ElevatedButton(
                onPressed: () {},
                child: const Text('Options'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
