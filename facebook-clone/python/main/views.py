from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from djangomtv.utils import console

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