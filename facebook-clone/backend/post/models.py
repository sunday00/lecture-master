from django.db import models
from django.conf import settings
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
import re
from accounts.models import *
# Create your models here.

def photo_path(instance, filename):
  from time import strftime
  from random import choice
  import string
  arr = [choice(string.ascii_letters) for _ in range(8)]
  pid = ''.join(arr)
  ext = filename.split('.')[-1]
  return '{}/{}/{}.{}'.format(strftime('post/%Y/%m/%d/'), instance.author.username, pid, ext)

class Post(models.Model):
  author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  photo = ProcessedImageField(
    blank=True,
    null=True,
    upload_to=photo_path, 
    processors=[ResizeToFill(600,600)],
    format='JPEG', 
    options={'quality': 90},
    ) 
  content = models.CharField(max_length=140, help_text='max 140 letters')

  like_user_set = models.ManyToManyField(settings.AUTH_USER_MODEL,
      blank=True,
      related_name='like_post_set',
      through='Like'
    )
  bookmark_user_set = models.ManyToManyField(settings.AUTH_USER_MODEL,
      blank=True,
      related_name='bookmark_post_set',
      through='Bookmark'
    )    

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    ordering = ['-created_at']

  def __str__(self):
    return self.content

  @property
  def like_count(self):
    return self.like_user_set.count()

  @property
  def bookmark_count(self):
    return self.bookmark_user_set.count()

class Like(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    unique_together = (
      ('user', 'post')
    )

class Bookmark(models.Model):
  user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
  post = models.ForeignKey(Post, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    unique_together = (
      ('user', 'post')
    )
