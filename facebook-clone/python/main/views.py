from django.urls import reverse_lazy, reverse
from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from djangomtv.utils import console

from .models import Article

from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView

from django.contrib.auth.decorators import login_required
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

@login_required
def private(req):
    articles = Article.objects.all()

    return render(req, 'dig-template2.html', {
        'articles': articles
    })

class SignUp(CreateView) :
    form_class = UserCreationForm
    model = get_user_model()
    # fields = '__all__'

    def get_success_url(self) -> str:
        print( self.object.pk )
        return reverse('main:profile', kwargs={'pk':self.object.pk})

class Login(LoginView) :
    pass

class Logout(LogoutView) :
    next_page = '/'

class Profile(LoginRequiredMixin, DetailView):
    model = get_user_model()
    # fields = '__all__'
    login_url = '/auth/login/'
