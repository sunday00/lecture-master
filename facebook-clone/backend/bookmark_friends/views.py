from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth import get_user_model
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from post.models import *
from .models import *

# Create your views here.
def bookmark_friends_list(req):
  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
  else: 
    user_profile = None

  post_list = Post.objects.all()

  return render(req, 'bookmark_friends/bookmark_friends_list.html', {
      'user_profile' : user_profile,
      'post_list': post_list
    })
