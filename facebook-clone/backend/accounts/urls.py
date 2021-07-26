from django.urls import path
from .views import *

app_name = 'accounts'

urlpatterns = [
    path('sign-up/', signUp, name='signUp'),
    path('login/', login_check, name='login'),
    path('logout/', logOut, name='logout'),
]
