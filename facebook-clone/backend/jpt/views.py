from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404, render
from django.db.models import Q

from accounts.models import Profile, Friend
from chat.models import Room
from post.models import Bookmark, Comment, Like, Post, Tag
from .models import Cafe

from faker import Faker
from faker.providers import lorem
from spongebobcase import tospongebob
import pandas as pd
import numpy as np

from random import *


# Create your views here.
def index (req):
  cafe_list = Cafe.objects.all()
  return render(req, 'jpt/index.html', {
    'cafe_list': cafe_list
  })

def data (req):
  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
   
  else: 
    user_profile = None

  targetData = [
    Friend, Profile, Tag, Like, Post
  ]

  listedDataDict = dict()

  for data in targetData:
    listedData = pd.DataFrame( list( data.objects.all().values() ))
    listedDataDict[data.__name__ + 'List'] = listedData

  return render(req, 'jpt/data.html', {
    'user_profile' : user_profile,
    'friendsDict' : dict(listedDataDict['FriendList']['created_at'].value_counts().sort_index())
  })

def dataToFile(req):
  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
  
  else: 
    user_profile = None

  targetData = [
    Friend, Profile, Tag, Like, Post
  ]
  
  with open("temp.text", 'w') as f:
    for data in targetData:
      allData = data.objects.all()[:10]
      f.write(f'Count : {data.__name__} {allData.count()}\n')
      for r in allData:
        f.write(f'{r.id} : {r}\n')
      f.write('-=-=-=-=-=-=-=-=-=-=\n\n\n')

  return render(req, 'jpt/data.html', {
    'user_profile' : user_profile,
  })

def dataToAnalyzeFile(req):
  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
  
  else: 
    user_profile = None

  targetData = [
    Friend, Profile, Tag, Like, Post
  ]
  
  with open("temp.text", 'w') as f:
    for data in targetData:
      allData = pd.DataFrame( list( data.objects.all()[:10].all().values() ))
      f.write(f'Count : {data.__name__}\n')
      f.write(f'{allData}\n')
      f.write('-=-=-=-=-=-=-=-=-=-=\n\n\n')

  return render(req, 'jpt/data.html', {
    'user_profile' : user_profile,
  })

def dataToCsvFile(req):
  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
  
  else: 
    user_profile = None

  targetData = [
    Friend, Profile, Tag, Like, Post
  ]
  
  for data in targetData:
    allData = pd.DataFrame( list( data.objects.all().values() ))
    allData.to_csv( 'csv_' + data.__name__ + '_data.csv', mode='w' )

  return render(req, 'jpt/data.html', {
    'user_profile' : user_profile,
  }) 

def dataFriends(req):
  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
  
  else: 
    user_profile = None
  
  friendsData = pd.DataFrame(list( Friend.objects.all().values() ))
  friendsData.to_csv('friendsData.csv', mode='w')

  return render(req, 'jpt/data.html', {
    'user_profile' : user_profile,
  })


def dev_insert_user (req):
  fake = Faker()
  fake.add_provider(lorem)

  user_model = get_user_model()

  for i in range(30):
    user = user_model.objects.create(
      username      = f"{ fake.unique.first_name() }{ randint(1, 9999) }",
      is_superuser  = 0,
      email         = fake.email(),
      is_staff      = 0,
    )
    user.set_password(tospongebob(fake.word() + fake.word(ext_word_list=['#', '?','!','$','-','_','@',]) + fake.word()))

    profile = Profile.objects.create(
      user_id=user.id,
      nick = fake.unique.first_name() + str(randint(1, 9999)),
      gender = fake.word(ext_word_list=['male','female'])
    )
    
    user.save()

  return render(req, 'dev/complete.html', {
    
  })

def dev_insert_friend_req (req):
  user_model = get_user_model()

  for i in range(30):
    user = user_model.objects.order_by("?").first()
    user2 = user_model.objects.order_by("?").first()

    while user2 and user.id == user2.id:
      user2 = user_model.objects.order_by("?").first()

    user.friends_requests.create(from_user=user, to_user=user2)
  
  return render(req, 'dev/complete.html', {
    
  })

def dev_insert_friend (req):
  user_model = get_user_model()

  for i in range(30):
    user = user_model.objects.order_by("?").first()
    user2 = user_model.objects.order_by("?").first()

    while user2 and user.id == user2.id:
      user2 = user_model.objects.order_by("?").first()

    if Room.objects.filter( Q(room_name=user.username+","+user2.username) | Q(room_name=user2.username+","+user.username) ) :
      continue

    room = Room.objects.create(
      room_name = user.username +","+ user2.username
    )
    room.users.set([user, user2])
    
    user.friends.create(current_user=user.id, user_id=user2.id, room_id=room.id)
  
  return render(req, 'dev/complete.html', {
    
  })

def dev_insert_post (req):
  fake = Faker()
  fake.add_provider(lorem)

  user_model = get_user_model()

  for i in range(30):
    user = user_model.objects.order_by("?").first()

    text = fake.text()
    for y in range(randint(1, 10)):
      text += "<br /> \n" + fake.text()

    if randint(1, 10) % 3 == 0:
      text += "<br /> \n"
      text += "#" + fake.word()

    post = Post.objects.create(
      content=text,
      author_id=user.id
    )

    post.tag_save()

  return render(req, 'dev/complete.html', {
    
  })

def dev_insert_comment (req):
  fake = Faker()
  fake.add_provider(lorem)

  user_model = get_user_model()

  for i in range(60):
    post = Post.objects.order_by("?").first()
    user = user_model.objects.order_by("?").first()

    text = fake.sentence(nb_words=randint(1, 20))

    Comment.objects.create(
      author_id=user.id,
      post_id=post.id,
      content=text
    )

  return render(req, 'dev/complete.html', {
    
  })

def dev_insert_like_and_bookmark (req):
  user_model = get_user_model()

  for i in range(30):
    post = Post.objects.order_by("?").first()
    user = user_model.objects.order_by("?").first()

    Like.objects.create(
      post_id=post.id,
      user_id=user.id
    )
  
  for i in range(30):
    post = Post.objects.order_by("?").first()
    user = user_model.objects.order_by("?").first()

    Bookmark.objects.create(
      post_id=post.id,
      user_id=user.id
    )

  return render(req, 'dev/complete.html', {
    
  })








