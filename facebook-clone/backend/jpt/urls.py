from django.urls import path
from .views import *

app_name = 'jpt'

urlpatterns = [
    path('', index, name='index'),
    path('data/', data, name='data'),
    
    path('dev/insert_user', dev_insert_user, name='insert_user'),
    path('dev/dev_insert_friend_req', dev_insert_friend_req, name='dev_insert_friend_req'),
]
