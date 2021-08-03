from django.shortcuts import get_object_or_404, render
from django.contrib.auth import get_user_model
from .models import *

# Create your views here.
def post_list(req):
  post_list = Post.objects.all()

  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
  else: 
    user_profile = None
  return render(req, 'post/post_list.html', {
      'user_profile' : user_profile,
      'posts': post_list
    })