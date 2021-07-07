from django.shortcuts import render
from djangomtv.utils import console

# Create your views here.


def index(req):
    return render(req, 'index.html')


def formex(req):

    console.log(req.POST)

    return render(req, 'formex.html')

