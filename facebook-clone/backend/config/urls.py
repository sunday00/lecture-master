from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import redirect

urlpatterns = [
    path('', lambda r: redirect('post:post_list'), name='root'),
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),

    path('post/', include('post.urls', namespace='post')),

    path('bookmark_friends/', include('bookmark_friends.urls', namespace='bookmark_friends')),

    path('chat/', include('chat.urls'), namespace="chat"),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)