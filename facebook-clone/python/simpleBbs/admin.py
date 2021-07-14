from django.contrib import admin
from .models import Blog

# Register your models here.
# admin.site.register(Article)

@admin.register(Blog)
class ArticleAdmin(admin.ModelAdmin):
  list_display = ['title']
  list_display_links = ['title']