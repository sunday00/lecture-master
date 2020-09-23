import 'package:flutter/material.dart';
import 'package:flutter_overview/model/api_adapter.dart';
import 'package:flutter_overview/model/model_quiz.dart';
import 'package:flutter_overview/screen/screen_quiz.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomeScreen extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  List<Quiz> quizs = [];
  bool isLoading = false;

  _fetchQuizs() async {
    setState(() {
      isLoading = true;
    });
    final response = await http.get('http://10.0.2.2:8000/quiz/3/');
    if (response.statusCode == 200) {
      setState(() {
        quizs = parseQuizs(utf8.decode(response.bodyBytes));
        isLoading = false;
      });
    } else {
      throw Exception('failed to load data');
    }
  }
  // List<Quiz> quizs = [
  //   Quiz.fromMap({
  //     'title': 'example1',
  //     'candidates': ['1', '2', '3', '4'],
  //     'answer': 0
  //   }),
  //   Quiz.fromMap({
  //     'title': 'example2',
  //     'candidates': ['a', 'b', 'c', 'd'],
  //     'answer': 3
  //   }),
  //   Quiz.fromMap({
  //     'title': 'example3',
  //     'candidates': ['z', 'x', 'c', 'v'],
  //     'answer': 2
  //   })
  // ];

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;

    double width = screenSize.width;
    double height = screenSize.height;

    return WillPopScope(
        onWillPop: () async => false,
        child: SafeArea(
            child: Scaffold(
          key: _scaffoldKey,
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
                        _scaffoldKey.currentState.showSnackBar(SnackBar(
                          content: Row(
                            children: <Widget>[
                              CircularProgressIndicator(),
                              Padding(
                                  padding:
                                      EdgeInsets.only(left: width * 0.036)),
                              Text('Loading...'),
                            ],
                          ),
                        ));
                        _fetchQuizs().whenComplete(() {
                          return Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) => QuizScreen(
                                        quizs: quizs,
                                      )));
                        });
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
