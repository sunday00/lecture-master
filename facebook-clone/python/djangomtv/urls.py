"""djangomtv URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
# from main.views import index, formex, resBody, jsonBody, digTemplate, digTemplate2
from main.views import index, formex, resBody, jsonBody
from sub1.views import globalTemplate, subIndex
from cbv.views import CbvList, CbvRead

urlpatterns = [
    path('', index),
    path('formex/', formex),
    path('resBody/', resBody),
    path('jsonBody/', jsonBody),

    path('aa/', subIndex),
    path('aa/global-template', globalTemplate),

    path('dig-template/', include('main.urls')),
    # path('dig-template2', digTemplate2),

    path('simple-bbs/', include('simpleBbs.urls')),
    path('cvb-bbs/', CbvList.as_view()),
    path('cvb-bbs/<int:pk>/', CbvRead.as_view())
]

# urlpatterns += path('admin/', admin.site.urls),
# urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    path('admin/', admin.site.urls),
    static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)[0]
]
