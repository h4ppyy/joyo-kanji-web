from django.contrib import admin

from . import models

admin.site.register(models.Kanji)
admin.site.register(models.Word)