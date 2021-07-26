from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm
from .models import Profile
from django.contrib.auth.models import User

class SignUpForm(UserCreationForm):
  username = forms.CharField(
    label='username',
    widget=forms.TextInput(attrs={
      'pattern': '[a-zA-Z0-9]+',
      'title': 'only alphabets and number available'
    }),
    max_length=50,
    required=True
  )

  nick = forms.CharField(label='nick')

  picture = forms.ImageField(label='profile picture', required=False)

  class Meta(UserCreationForm.Meta):
    fields = UserCreationForm.Meta.fields + ('email',)
  
  def clean_nick(self):
    nick = self.cleaned_data.get('nick')
    if Profile.objects.filter(nick=nick).exists():
      raise forms.ValidationError('duplicated nick')
    return nick

  def clean_email(self):
    email = self.cleaned_data.get('email')
    User = get_user_model()
    if User.objects.filter(email=email).exists():
      raise forms.ValidationError('duplicated email')
    return email

  def clean_picture(self):
    picture = self.cleaned_data.get('picture')
    if not picture:
      picture = None
    return picture

  def save(self):
    user = super().save()
    Profile.objects.create(
      user=user,
      nick=self.cleaned_data['nick'],
      picture=self.cleaned_data['picture']
    )
    return user

class LoginForm(forms.ModelForm):
  class Meta:
    model = User
    fields = ['username', 'password']