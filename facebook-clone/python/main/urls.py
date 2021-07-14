"""
main app urls config
"""
from django.urls import path
from .views import digTemplate, digTemplate2

app_name="main"

urlpatterns = [
    path('1/', digTemplate, name="digTemplate1"),
    path('2/', digTemplate2, name="digTemplate2"),
]
