from django.db import models
from django.db.models.fields import CharField, PositiveIntegerField, TextField

# Create your models here.
class Article(models.Model):
  title = CharField(max_length=100)
  contents = TextField()
  likeCnt = PositiveIntegerField()
  viewCnt = PositiveIntegerField()

  def __str__(self):
    return f'idL{self.id},title:{self.title}, likeCnt:{self.likeCnt}, viewCnt:{self.viewCnt}'