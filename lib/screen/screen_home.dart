import 'package:flutter/material.dart';
import 'package:flutter_overview/model/model_quiz.dart';
import 'package:flutter_overview/screen/screen_quiz.dart';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Quiz> quizs = [
    Quiz.fromMap({
      'title': 'example1',
      'candidates': ['1', '2', '3', '4'],
      'answer': 0
    }),
    Quiz.fromMap({
      'title': 'example2',
      'candidates': ['a', 'b', 'c', 'd'],
      'answer': 3
    }),
    Quiz.fromMap({
      'title': 'example3',
      'candidates': ['z', 'x', 'c', 'v'],
      'answer': 2
    })
  ];

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;

    double width = screenSize.width;
    double height = screenSize.height;

    return WillPopScope(
        onWillPop: () async => false,
        child: SafeArea(
            child: Scaffold(
          appBar: AppBar(
            title: Text('My Quiz App'),
            backgroundColor: Colors.deepPurple,
            leading: Container(),
          ),
          body: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Center(
                child: Image.asset(
                  'images/quiz.jpeg',
                  width: width * 0.8,
                ),
              ),
              Padding(
                padding: EdgeInsets.all(width * 0.024),
              ),
              Text(
                'Flutter Quiz App',
                style: TextStyle(
                  fontSize: width * 0.065,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                'Info',
                textAlign: TextAlign.center,
              ),
              Padding(
                padding: EdgeInsets.all(width * 0.048),
              ),
              _buildStep(width, '1. Solve the random quiz.'),
              _buildStep(width, '2. Select Answer and press next button.'),
              _buildStep(width, '3. Challenge receiving perfect score.'),
              Padding(
                padding: EdgeInsets.all(width * 0.024),
              ),
              Container(
                padding: EdgeInsets.only(bottom: width * 0.036),
                child: Center(
                  child: ButtonTheme(
                    minWidth: width * 0.8,
                    height: height * 0.05,
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10)),
                    child: RaisedButton(
                      child: Text(
                        'CHALLENGE NOW!',
                        style: TextStyle(
                          color: Colors.white,
                        ),
                      ),
                      color: Colors.deepPurple,
                      onPressed: () {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (context) => QuizScreen(
                                      quizs: quizs,
                                    )));
                      },
                    ),
                  ),
                ),
              )
            ],
          ),
        )));
  }

  Widget _buildStep(double width, String title) {
    return Container(
      padding: EdgeInsets.fromLTRB(
          width * 0.048, width * 0.024, width * 0.048, width * 0.024),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Icon(
            Icons.check_box,
            size: width * 0.05,
          ),
          Padding(
            padding: EdgeInsets.only(right: width * 0.024),
          ),
          Text(title),
        ],
      ),
    );
  }
}
