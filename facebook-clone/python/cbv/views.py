from django.shortcuts import render
from django.views.generic import ListView, DetailView
from simpleBbs.models import Blog

# Create your views here.
class CbvList(ListView):
  # return render(req, 'cbvIndex.html')
  model = Blog
  template_name = 'cbvIndex.html'
  ordering = '-pk'

class CbvRead(DetailView):
  # return render(req, 'cbvIndex.html')
  model = Blog
  template_name = 'cbvRead.html'
  

