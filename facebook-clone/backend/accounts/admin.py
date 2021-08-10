from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
  list_display = ['id', 'nick', 'user']
  list_display_links = ['id', 'nick', 'user']
  search_fields = ['nick']

@admin.register(Friend)
class FriendAdmin(admin.ModelAdmin):
  list_display = ['current_user', 'user', 'created_at']
  list_display_links = ['current_user', 'user',]
  search_fields = ['current_user', 'user',]

@admin.register(FriendRequest)
class FriendRequestAdmin(admin.ModelAdmin):
  list_display = ['id', 'from_user', 'to_user', 'created_at']
  list_display_links = ['from_user', 'to_user',]
  search_fields = ['from_user', 'to_user',]