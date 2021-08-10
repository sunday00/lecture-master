from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render
from django.contrib.auth import get_user_model
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from .models import *

# Create your views here.
def post_list(req):
  post_list = Post.objects.all()

  if req.user.is_authenticated:
    username = req.user
    
    friends = username.friends.all()
    request_friends = username.friends_requests

    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile
   
    friend_list = user.friends.all()
    my_friend_user_list = list(map(lambda friend: friend.user, friend_list))
    
    friend_request_list = user.friends_requests.all()
    my_friend_request_user_list = list(map(lambda friend_request: friend_request.to_user, friend_request_list))

  else: 
    user_profile = None
    friends = []
    request_friends = []
    my_friend_user_list = []
    my_friend_request_user_list = []

  return render(req, 'post/post_list.html', {
      'user_profile' : user_profile,
      'posts': post_list,
      'friends': friends,
      'request_friends': request_friends,
      'my_friend_user_list': my_friend_user_list,
      'my_friend_request_user_list': my_friend_request_user_list,
    })

@login_required
@require_POST
def post_like (req):
  pk = req.POST.get('pk', None)
  post =get_object_or_404(Post, pk=pk)
  post_like, post_like_created = post.like_set.get_or_create(user=req.user)

  if not post_like_created:
    post_like.delete()
    message = 'cancel like'
  else:
    message = 'like'

  ctx = {'like_count': post.like_count, 'message': message}

  return JsonResponse(ctx)

@login_required
@require_POST
def post_bookmark (req):
  pk = req.POST.get('pk', None)
  post =get_object_or_404(Post, pk=pk)
  post_bookmark, post_bookmark_created = post.bookmark_set.get_or_create(user=req.user)

  if not post_bookmark_created:
    post_bookmark.delete()
    message = 'cancel bookmark'
    is_bookmarked = 'N'
  else:
    message = 'bookmarked'
    is_bookmarked = 'Y'

  ctx = {'is_bookmarked': is_bookmarked, 'message': message}

  return JsonResponse(ctx)
