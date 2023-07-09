import 'package:flutter/material.dart';
import 'package:flutter_carousel_slider/carousel_slider.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';

import 'game_play.dart';

class SelectSpaceship extends StatefulWidget {
  const SelectSpaceship({super.key});

  @override
  State<SelectSpaceship> createState() => _SelectSpaceshipState();
}

class _SelectSpaceshipState extends State<SelectSpaceship> {
  late final Image spaceshipImages;

  void loadImages() async {
    spaceshipImages = Image.asset('assets/images/ships.png');
  }

  @override
  void initState() {
    super.initState();

    loadImages();
  }

  List<double> _convertIndex(int id) {
    double IdX = (1 / 7) * 1;
    double IdY = -(1 / 5) * 5;

    //TODO

    return [IdX, IdY];
  }

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
                'Select',
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
              height: MediaQuery.of(context).size.height * 0.5,
              child: CarouselSlider.builder(
                slideBuilder: (idx) {
                  final spaceship =
                      Spaceship.spaceships.entries.elementAt(idx).value;

                  var imageXy = _convertIndex(spaceship.spriteId);

                  return Column(
                    children: [
                      ClipRect(
                        child: Align(
                          alignment: Alignment(imageXy[0], imageXy[1]),
                          widthFactor: 1 / 8,
                          heightFactor: 1 / 6,
                          child: spaceshipImages,
                        ),
                      )
                    ],
                  );
                },
                itemCount: Spaceship.spaceships.length,
              ),
            ),
            SizedBox(
              width: MediaQuery.of(context).size.width / 3,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pushReplacement(
                    MaterialPageRoute(builder: (context) => const GamePlay()),
                  );
                },
                child: const Text('Start'),
              ),
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
