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