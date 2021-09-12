from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from .models import *
from accounts.models import *
import logging

# Create your views here.
def chat_list(req):
  user = req.user
  user_profile = user.profile
  friends = user.friends.all()

  return render(req, 'chat/chat_list.html', {
    'user_profile': user_profile,
    'friends': friends
  })

def room(req, room_id):
  user = req.user
  user_profile = user.profile
  friends = user.friends.all()
  room = Room.objects.get(pk=room_id)
  friends_user = room.users.all().exclude(pk=user.id).first()

  return render(req, 'chat/room.html', {
    'current_user': user,
    'user_profile': user_profile,
    'friends': friends,
    'room': room,
    'friend_user': friends_user,
  })
