from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.contrib.auth import get_user_model
from django.core import serializers
from django.forms.models import model_to_dict
from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.db.models import Count
from .models import *
from .forms import *

# Create your views here.
def post_list(req, tag=None):
  tag_all = Tag.objects.annotate(num_post=Count('post')).order_by('-num_post')

  if tag:
    post_list = Post.objects.filter(tag_set__name__iexact = tag)
  else :
    post_list = Post.objects.all()

  if req.method == 'POST' and req.POST.get('tag') != None:
    tag = req.POST.get('tag')
    tag_clean = ''.join(e for e in tag if e.isalnum())
    return redirect('post:post_search', tag_clean)

  comment_form = CommentForm(auto_id=False)
  post_form = PostForm(auto_id=False)

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

    comments = []

  else: 
    user_profile = None
    friends = []
    request_friends = []
    my_friend_user_list = []
    my_friend_request_user_list = []
    comments = []

  paginator = Paginator(post_list, 4)
  page_num = req.POST.get('page')

  try:
    post_list = paginator.page(page_num)
  except PageNotAnInteger:
    post_list = paginator.page(1)
  except EmptyPage:
    post_list = []
  
  if req.is_ajax():
    return render(req, 'post/post_list_ajax.html', {
      'posts': post_list,
      'user_profile' : user_profile,
      'comment_form': comment_form
    })

  return render(req, 'post/post_list.html', {
      'tag' : tag,
      'tag_all': tag_all,
      'user_profile' : user_profile,
      'posts': post_list,
      'friends': friends,
      'request_friends': request_friends,
      'my_friend_user_list': my_friend_user_list,
      'my_friend_request_user_list': my_friend_request_user_list,
      'comment_form': comment_form,
      'post_form': post_form,
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

@login_required
def comment_new(req):
  pk = req.POST.get('pk')
  post = get_object_or_404(Post, pk=pk)
  if req.method == 'POST':
    form = CommentForm(req.POST)
    if form.is_valid():
      comment = form.save(commit = False)
      comment.author = req.user
      comment.post = post
      comment.save()
      result = form.save()
  #     return render(req, 'post/comment_new_ajax.html', {
  #       'comment': comment,
  #     })
  # return redirect('post:post_list')
      ctx = {'success': 1, 'post': post.id, 'comment': {
        'id': result.id,
        'content':result.content,
        'created_at':result.created_at,
      }}
    else :
      ctx = {'success': 0, 'message': 'fail'}  
  else :
    ctx = {'success': 0, 'status_code': 404, 'message': 'Not Found'}
  return JsonResponse(ctx)

@login_required
def comment_delete(req):
  pk = req.POST.get('pk')
  comment = get_object_or_404(Comment, pk=pk)
  if req.method == 'POST' and req.user == comment.author:
    post = comment.post_id
    comment.delete()
    message = f'success deleted {pk}'
    status = '1'
  else :
    message = 'fail'
    status = '0'
  
  return JsonResponse({
    'message' : message, 'status': status, 'post' : post
  })

@login_required
def post_new(req):
  if req.method == 'POST':
    form = PostForm(req.POST, req.FILES)
    if form.is_valid():
      post = form.save(commit = False)
      post.author = req.user
      post.save()
      post.tag_save()
      result = form.save()
      ctx = {'success': 1, 'id': result.id}
    else :
      ctx = {'success': 0, 'message': 'fail'}  
  else :
    ctx = {'success': 0, 'status_code': 404, 'message': 'Not Found'}
  return JsonResponse(ctx)

@login_required
def post_edit(req, pk):
  post = get_object_or_404(Post, pk=pk)

  if req.user.is_authenticated:
    username = req.user
    user = get_object_or_404(get_user_model(), username=username)
    user_profile = user.profile

  else: 
    user_profile = None

  if post.author != req.user:
    messages.Warning(req, 'Bad Request')
    return redirect('post:post_list')
  if req.method == 'POST':
    form = PostForm(req.POST, req.FILES, instance=post)
    if form.is_valid():
      post = form.save()
      post.tag_set.clear()
      post.tag_save()
      messages.success(req, 'done')
      return redirect('post:post_list')
  else:
    form = PostForm(instance=post)
  return render(req, 'post/post_edit.html', {
    'user_profile' : user_profile,
    'post': post,
    'form': form
  })

@login_required
# def post_delete(req, pk):
def post_delete(req):
  post = get_object_or_404(Post, pk=req.POST.get('pk'))
  if post.author != req.user or req.method == 'GET':
    messages.Warning(req, 'Bad Request')
    return redirect('post:post_list')
  if req.method == 'POST':
    post.delete()
    messages.success(req, 'done')
    return redirect('post:post_list')
