from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404, render

from accounts.models import Profile
from .models import Cafe
from faker import Faker
from faker.providers import lorem
from spongebobcase import tospongebob
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
  