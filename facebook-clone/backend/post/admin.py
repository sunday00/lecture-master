from django.contrib import admin
from .models import Post

# Register your models here.
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['id', 'created_at', 'author_id']
  list_display_links = ['id', 'created_at', 'author_id']
  search_fields = ['content']

  def nickname(request, post):
    return post.author.profile.nickname