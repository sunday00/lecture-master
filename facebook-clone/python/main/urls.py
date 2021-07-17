"""
main app urls config
"""
from django.urls import path
from .views import digTemplate, digTemplate2, private, SignUp, Login, Logout, Profile

app_name="main"

urlpatterns = [
    path('1/', digTemplate, name="digTemplate1"),
    path('2/', digTemplate2, name="digTemplate2"),
    path('private/', private, name="private"),
    path('sign-up/', SignUp.as_view()),
    path('login/', Login.as_view()),
    path('logout/', Logout.as_view()),
    path('profile/<int:pk>', Profile.as_view(), name="profile"),
]
