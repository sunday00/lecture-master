from django.contrib import admin
from .models import Bookmark, Like, Post

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['id', 'created_at', 'author_id']
  list_display_links = ['id', 'created_at', 'author_id']
  search_fields = ['content']

  def nickname(request, post):
    return post.author.profile.nickname

@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
  list_display = ['id', 'post', 'created_at']
  list_display_links = ['id', 'post']

@admin.register(Bookmark)
class BookmarkAdmin(admin.ModelAdmin):
  list_display = ['id', 'post', 'created_at']
  list_display_links = ['id', 'post']
