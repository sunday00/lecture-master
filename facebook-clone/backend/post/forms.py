from typing import get_args
from django import forms
from .models import *

class CommentForm(forms.ModelForm):
  content = forms.CharField(label='', widget=forms.TextInput(attrs={
    'size': '70px',
    'placeholder': 'leave your comments...',
    'maxlength': '40',
    
  }))

  class Meta:
    model = Comment
    fields = ['content']

class PostForm(forms.ModelForm):
  photo = forms.ImageField(label='', required=False, widget=forms.FileInput(attrs={
    'name': 'photo',
    'id': 'id_photo',
    'accept': 'image/*'
  }))
  content = forms.CharField(label='', widget=forms.Textarea(attrs={
    'id': 'text_field',
    'data-name': 'add',
    'class': 'post-new-content',
    'rows': 5,
    'cols': 50,
    'placeholder': 'What do you think, in 140letters...'
  }))

  class Meta:
    model = Post
    fields = ['photo', 'content']