# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Quiz
from .serializers import QuizSerializer
import random

# Create your views here.
@api_view(['GET'])
def helloAPI(request):
    return Response('hello world!')

@api_view(['GET'])
def randomQuiz(request, count):
    totalQuizs = Quiz.objects.all()
    randomQuizs = random.sample(list(totalQuizs), count)
    serializer = QuizSerializer(randomQuizs, many=True)
    return Response(serializer.data)