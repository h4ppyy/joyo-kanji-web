from django.urls import path
from django.conf.urls import url
from . import views as ApiViews

urlpatterns = [
    path('get_kanji_list', ApiViews.get_kanji_list, name='get_kanji_list'),
]