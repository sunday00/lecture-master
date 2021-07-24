from django.contrib import admin
from .models import Proflie

# Register your models here.
@admin.register(Proflie)
class ProfileAdmin(admin.ModelAdmin):
  list_display = ['id', 'nick', 'user']
  list_display_links = ['id', 'nick', 'user']
  search_fields = ['nick']