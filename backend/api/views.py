import json
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.db import connections
from django.conf import settings
from django.core import serializers
from .models import Kanji, Word

def get_kanji_list(request):
    kanjis = Kanji.objects.all()
    kanjis = serializers.serialize('json', kanjis)
    return HttpResponse(kanjis, content_type='application/json')

def get_word_list(request):
    pk = request.GET.get('pk')
    words = Word.objects.filter(kanji=pk)
    words = serializers.serialize('json', words)
    return HttpResponse(words, content_type='application/json')