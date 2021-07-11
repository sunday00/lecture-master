from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from djangomtv.utils import console

from .models import Article

# Create your views here.


def index(req):
    return render(req, 'index.html')


def formex(req):
    if len(req.POST) > 0 :
        console.loop(req.POST, name="post")
        # console.loopArray(['a','b','c','d'])
        return redirect(f'/resBody?name={req.POST.get("id")}')
    
    return render(req, 'formex.html')

def resBody(req):
    return HttpResponse(f'hello {req.GET.get("name")}')

def jsonBody(req):
    return JsonResponse({"apple": "red", "banana":"yellow"})

def digTemplate(req):
    articles = Article.objects.all()

    return render(req, 'dig-template.html', {
        'val': [100, 200, 300],
        'person' : {'name': 'sunday', 'score': 10},
        'articles': articles
    })

def digTemplate2(req):
    articles = Article.objects.all()

    return render(req, 'dig-template2.html', {
        'articles': articles
    })