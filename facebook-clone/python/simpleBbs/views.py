from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from djangomtv.utils import console

from . import urls
from .models import Blog
# Create your views here.
def index (req) :
  blogs = Blog.objects.all()

  return render(req, urls.app_name + '/index.html', {
    'app_name' : urls.app_name,
    'blogs' : blogs,
  })

def read (req, pk) :
  blog = Blog.objects.get(pk=pk)

  return render(req, urls.app_name + '/read.html', {
    'app_name' : urls.app_name,
    'blog' : blog,
  })