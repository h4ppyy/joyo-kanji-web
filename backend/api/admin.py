from django.contrib import admin

from .models import Kanji, Word

@admin.register(Kanji)
class KanjiAdmin(admin.ModelAdmin):
    list_display = ['id', 'kanji', 'mean', 'kunyomi', 'onyomi']
    ordering = ['id']
    search_fields = ['id', 'kanji', 'mean', 'kunyomi', 'onyomi']

@admin.register(Word)
class WordAdmin(admin.ModelAdmin):
    list_display = ['id', 'kanji_kanji', 'image', 'word', 'mean']
    ordering = ['-id']
    search_fields = ['word', 'mean']
    
    def kanji_kanji(self, obj):
        return obj.kanji.kanji
