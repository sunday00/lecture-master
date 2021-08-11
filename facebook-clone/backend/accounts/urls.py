from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('sign-up/', signUp, name='signUp'),
    path('login/', login_check, name='login'),
    path('logout/', logOut, name='logout'),

    path('create_friend_request/', create_friend_request, name='create_friend_request'),
    path('cancel_add_friend/', cancel_add_friend, name='cancel_add_friend'),
    path('accept_friend_request/', accept_friend_request, name='accept_friend_request'),
]
