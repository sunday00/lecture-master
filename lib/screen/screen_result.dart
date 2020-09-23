import 'package:flutter/material.dart';
import 'package:flutter_overview/model/model_quiz.dart';
import 'package:flutter_overview/screen/screen_home.dart';

class ResultScreen extends StatelessWidget {
  List<int> answers;
  List<Quiz> quizs;

  ResultScreen({this.answers, this.quizs});

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;

    double width = screenSize.width;
    double height = screenSize.height;

    int score = 0;

    for (int i = 0; i < quizs.length; i++) {
      if (quizs[i].answer == answers[i] + 1) {
        score++;
      }
    }

    return WillPopScope(
        onWillPop: () async => false,
        child: SafeArea(
          child: Scaffold(
            appBar: AppBar(
              title: Text('My Quiz App'),
              backgroundColor: Colors.deepPurple,
              leading: Container(),
            ),
            body: Center(
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: Colors.deepPurple),
                  color: Colors.deepPurple,
                ),
                width: width * 0.85,
                height: height * 0.7,
                child: Column(
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.only(bottom: width * 0.048),
                    ),
                    Container(
                      decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: Colors.deepPurple),
                          color: Colors.white),
                      width: width * 0.73,
                      height: height * 0.27,
                      child: Column(
                        children: <Widget>[
                          Container(
                            padding: EdgeInsets.fromLTRB(
                                0, width * 0.048, 0, width * 0.012),
                            child: Text(
                              "Result~!",
                              style: TextStyle(
                                  fontSize: width * 0.055,
                                  fontWeight: FontWeight.bold),
                            ),
                          ),
                          Text(
                            "SCORE ",
                            style: TextStyle(
                                fontSize: width * 0.03,
                                fontWeight: FontWeight.bold),
                          ),
                          Expanded(
                            child: Container(),
                          ),
                          Text(
                            score.toString() + "/" + quizs.length.toString(),
                            style: TextStyle(
                                fontSize: width * 0.2,
                                fontWeight: FontWeight.bold,
                                color: Colors.red[200]),
                          ),
                          Padding(
                            padding: EdgeInsets.all(width * 0.012),
                          )
                        ],
                      ),
                    ),
                    Expanded(
                      child: Container(),
                    ),
                    Container(
                      padding: EdgeInsets.only(bottom: width * 0.048),
                      child: ButtonTheme(
                        minWidth: width * 0.7,
                        height: height * 0.05,
                        shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10)),
                        child: RaisedButton(
                          child: Text(
                            "HOME",
                            style: TextStyle(
                                fontSize: width * 0.048, color: Colors.white),
                          ),
                          onPressed: () {
                            Navigator.push(context, MaterialPageRoute(
                              builder: (context) {
                                return HomeScreen();
                              },
                            ));
                          },
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          ),
        ));
  }
}
