from django.urls import path
from . import views

app_name='students'

urlpatterns = [
    # path('/', views.Courses, name="home-page"),
    path('reg', views.reg, name="reg"),
    path('store', views.store, name="store"),
    path('lists', views.lists, name="lists"),
]

