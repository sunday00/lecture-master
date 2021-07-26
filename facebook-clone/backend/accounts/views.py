from django.shortcuts import render, redirect
from .models import *
from django.contrib.auth import authenticate, login, logout
from .forms import SignUpForm, LoginForm

# Create your views here.
def signUp(req):
  if req.method == 'POST':
    form = SignUpForm(req.POST, req.FILES)

    if form.is_valid():
      user = form.save()
      return redirect('accounts:login')
    else : 
      print(form.errors)

  else : 
    form = SignUpForm()

  return render(req, 'accounts/signUp.html', {
    'form': form
  })

def login_check(req):
  if req.method == 'POST':
    form  = LoginForm(req.POST)
    name = req.POST.get('username')
    pswd = req.POST.get('password')

    user = authenticate(username = name, password = pswd)

    if user is not None : 
      login(req, user)
      return redirect("/")

  else :
    form = LoginForm()

  return render(req, 'accounts/login.html', {
    'form': form
  })

def logOut(req):
  logout(req)
  return redirect("/")