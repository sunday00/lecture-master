from django.shortcuts import render
from .models import Cafe

# Create your views here.
def index (req):
  cafe_list = Cafe.objects.all()
  return render(req, 'jpt/index.html', {
    'cafe_list': cafe_list
  })
