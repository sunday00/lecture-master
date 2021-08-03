from django.db import models
from django.conf import settings
from django.db.models.deletion import CASCADE
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
import re

# Create your models here.
def user_path(instance, filename: str):
  from random import choice
  import string
  arr = [choice(string.ascii_letters) for _ in range(8)]
  pid = ''.join(arr)
  ext = filename.split('.')[-1]
  return 'accounts/{}/{}.{}'.format(instance.user.username, pid, ext)

class Profile(models.Model):
  GENDER_C = (
    ('not picked', 'not picked'),
    ('female', 'female'),
    ('male', 'male'),
  )

  user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=CASCADE)
  nick = models.CharField('nick', max_length=30, unique=True)
  picture = ProcessedImageField(
      null=True,
      upload_to=user_path,
      processors=[ResizeToFill(150, 150)],
      format='JPEG',
      options={'quality' : 90}, blank=True,
    )
  about = models.CharField(max_length=300, blank=True)
  gender = models.CharField('gender', max_length=10, choices=GENDER_C, default='N')

