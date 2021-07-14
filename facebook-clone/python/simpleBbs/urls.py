"""
simple test bbs app urls config
"""
from django.urls import path
from .views import index, read
# , read, create, store, edit, update, delete

app_name="simpleBbs"

urlpatterns = [
    path('', index, name="index"),

    path('read/<int:pk>', read, name="read"),
]
