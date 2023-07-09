import 'package:flutter/material.dart';
import 'package:flutter_carousel_slider/carousel_slider.dart';
import 'package:flutter_space_escape/models/player_data.dart';
import 'package:flutter_space_escape/models/spaceship_detail.dart';
import 'package:flutter_space_escape/screens/main_menu.dart';
import 'package:provider/provider.dart';

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
    double idX = (1 / 7);
    double idY = -(1 / 5) * 5;

    idX = idX * (id - (7 - id));

    return [idX, idY];
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
            Consumer<PlayerData>(builder: (context, playData, child) {
              final spaceship =
                  Spaceship.getSpaceshipByType(playData.spaceshipType);
              return Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text('Current: ${spaceship.name}'),
                  Text('Money: ${playData.money}'),
                ],
              );
            }),
            SizedBox(
              height: MediaQuery.of(context).size.height * 0.5,
              child: CarouselSlider.builder(
                slideBuilder: (idx) {
                  final spaceship =
                      Spaceship.spaceships.entries.elementAt(idx).value;

                  var imageXy = _convertIndex(spaceship.spriteId);

                  return Column(
                    children: [
                      SizedBox(
                        width: MediaQuery.of(context).size.height * 0.3,
                        height: MediaQuery.of(context).size.height * 0.3,
                        child: FittedBox(
                          fit: BoxFit.fitWidth,
                          child: ClipRect(
                            child: Align(
                              alignment: Alignment(imageXy[0], imageXy[1]),
                              widthFactor: 1 / 8,
                              heightFactor: 1 / 6,
                              child: spaceshipImages,
                            ),
                          ),
                        ),
                      ),
                      Text(spaceship.name),
                      Text('bullet speed: ${spaceship.shootSpeed / 100}'),
                      Text('move speed: ${spaceship.speed / 5}'),
                      Text('health: ${spaceship.health}'),
                      Text('cost: ${spaceship.cost}'),
                      Consumer<PlayerData>(builder: (context, playData, child) {
                        final type =
                            Spaceship.spaceships.entries.elementAt(idx).key;
                        final isEquipped = playData.isEquipped(type);
                        final isOwned = playData.isOwned(type);
                        final canBuy = playData.canBuy(type);

                        return ElevatedButton(
                          onPressed: isEquipped
                              // || (!isOwned && !canBuy)
                              ? null
                              : () {
                                  if (isOwned) {
                                    playData.equip(type);
                                  } else {
                                    if (canBuy) {
                                      playData.buy(type);
                                    } else {
                                      showDialog(
                                          context: context,
                                          builder: (context) {
                                            return AlertDialog(
                                              backgroundColor: Colors.redAccent,
                                              title: const Text(
                                                'Not Enough Money',
                                                textAlign: TextAlign.center,
                                              ),
                                              content: Text(
                                                'Should more ${spaceship.cost - playData.money} needed',
                                                textAlign: TextAlign.center,
                                              ),
                                            );
                                          });
                                    }
                                  }
                                },
                          child: Text(
                            isEquipped
                                ? 'equipped'
                                : isOwned
                                    ? 'select'
                                    : canBuy
                                        ? 'buy'
                                        : 'LowMoney',
                          ),
                        );
                      }),
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
