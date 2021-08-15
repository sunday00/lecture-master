from django.contrib import admin
from .models import Bookmark, Comment, CommentAdminForm, Like, Post

class LikeInline(admin.TabularInline):
  model = Like

class BookmarkInline(admin.TabularInline):
  model = Bookmark

class CommentInline(admin.TabularInline):
  model = Comment

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['id', 'created_at', 'author_id']
  list_display_links = ['id', 'created_at', 'author_id']
  inlines = [LikeInline, BookmarkInline, CommentInline]
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

@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
  list_display = ['id', 'post', 'content', 'author', 'created_at']
  list_display_links = ['id', 'post', 'content']
  form = CommentAdminForm
