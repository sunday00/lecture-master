from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render, redirect
from .models import *
from django.contrib.auth import authenticate, get_user_model, login, logout
from .forms import SignUpForm, LoginForm
from chat.models import *

# Create your views here.
def signUp(req):
  if req.method == 'POST':
    form = SignUpForm(req.POST, req.FILES)

    if form.is_valid():
      user = form.save()
      return redirect('accounts:login')
    else : 
      print(form.errors)

  else : 
    form = SignUpForm()

  return render(req, 'accounts/signUp.html', {
    'form': form
  })

def login_check(req):
  if req.method == 'POST':
    form  = LoginForm(req.POST)
    name = req.POST.get('username')
    pswd = req.POST.get('password')

    user = authenticate(username = name, password = pswd)

    if user is not None : 
      login(req, user)
      return redirect("/")

  else :
    form = LoginForm()

  return render(req, 'accounts/login.html', {
    'form': form
  })

def logOut(req):
  logout(req)
  return redirect("/")

def create_friend_request(req):
  user_id = req.POST.get('pk', None)
  user = req.user
  target_user = get_object_or_404(get_user_model(), pk=user_id)
  
  try:
    user.friends_requests.create(from_user=user, to_user=target_user)
    ctx = {'result' : 'success', }
  except Exception as ex:
    print('err : ', ex)
    ctx = {'result' : 'error', }

  return JsonResponse(ctx)

def cancel_add_friend(req):
  friend_request_id = req.POST.get('to_user', None)
  user = req.user
  friend_request = FriendRequest.objects.get(to_user=friend_request_id, from_user=user.id)
  
  try:
    friend_request.delete()
    ctx = {'result' : 'success', }
  except Exception as ex:
    print('err : ', ex)
    ctx = {'result' : 'error', }

  return JsonResponse(ctx)

def deny_friend_request(req):
  friend_request_id = req.POST.get('pk', None)
  friend_request = FriendRequest.objects.get(pk=friend_request_id)
  
  try:
    friend_request.delete()
    ctx = {'result' : 'success', }
  except Exception as ex:
    print('err : ', ex)
    ctx = {'result' : 'error', }

  return JsonResponse(ctx)

def accept_friend_request(req):
  friend_request_id = req.POST.get('pk', None)
  friend_request = FriendRequest.objects.get(pk=friend_request_id)
  from_user = friend_request.from_user
  to_user = friend_request.to_user

  try:
    room_name = f"{from_user.username},{to_user.username}"
    room = Room.objects.create(room_name=room_name)
    
    # Friend.objects.create(user=from_user, current_user=to_user, room=room)
    # Friend.objects.create(user=to_user, current_user=from_user, room=room)

    Friend.objects.create(user=from_user, current_user=to_user)
    Friend.objects.create(user=to_user, current_user=from_user)
    friend_request.delete()

    ctx = {'result': 'success', }
  except Exception as ex:
    print('err : ', ex)
    ctx = {'result' : 'error', }

  return JsonResponse(ctx)

def unfollow_friend(req):
  friend_id = req.POST.get('friend_id', None)
  user = req.user
  friend = Friend.objects.get(user_id=friend_id, current_user_id=user.id)
  my_relation = Friend.objects.get(user_id=user.id, current_user_id=friend_id)
  
  try:
    friend.delete()
    my_relation.delete()
    ctx = {'result' : 'success', }
  except Exception as ex:
    print('err : ', ex)
    ctx = {'result' : 'error', }

  return JsonResponse(ctx)  