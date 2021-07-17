from django.db import models
from django.contrib.auth.models import User
import random


# Create your models here.
class Blog(models.Model) :
  r = random.randint(1, 10000)

  title = models.CharField(max_length=100)
  contents = models.TextField()
  img = models.ImageField(upload_to=f'simpleBbs/%Y/%m/%d/{r}', blank=True)
  author = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
  created_at = models.DateTimeField(auto_now_add=True, null=True)
  modified_at = models.DateTimeField(auto_now=True, null=True)

  def __str__(self) -> str:
      return f'title:{self.title}, contents:{self.contents}'