from django.shortcuts import render

# Create your views here.
def signUp(req):
  return render(req, 'accounts/signUp.html')

def login_check(req):
  return render(req, 'accounts/login.html')