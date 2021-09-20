from django.urls import path
from .views import *

app_name = 'jpt'

urlpatterns = [
    path('', index, name='index'),
    path('data/', data, name='data'),
    path('data/file', dataToFile, name='dataToFile'),

    path('data/analyze/file', dataToAnalyzeFile, name='dataToAnalyzeFile'),
    path('data/csv/file', dataToCsvFile, name='dataToCsvFile'),
    path('data/friends', dataFriends, name='dataFriends'),
    
    path('dev/insert_user', dev_insert_user, name='insert_user'),
    path('dev/insert_friend', dev_insert_friend, name='dev_insert_friend'),
    path('dev/insert_friend_req', dev_insert_friend_req, name='dev_insert_friend_req'),
    path('dev/insert_post', dev_insert_post, name='dev_insert_post'),
    path('dev/insert_comment', dev_insert_comment, name='dev_insert_comment'),
    path('dev/insert_like_and_bookmark', dev_insert_like_and_bookmark, name='dev_insert_like_and_bookmark'),
]
