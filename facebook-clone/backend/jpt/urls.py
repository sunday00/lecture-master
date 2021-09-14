from django.urls import path
from .views import *

app_name = 'jpt'

urlpatterns = [
    path('', index, name='index'),
    
]
