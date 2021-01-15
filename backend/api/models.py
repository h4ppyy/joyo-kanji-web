import os
from django.db import models
from django.conf import settings

class Kanji(models.Model):
    kanji = models.CharField(max_length=255)
    mean = models.CharField(max_length=255)
    kunyomi = models.CharField(max_length=255, blank=True, null=True)
    onyomi = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return '{id} - {kanji} - {mean}'.format(id=self.id, kanji=self.kanji, mean=self.mean)

class Word(models.Model):
    kanji = models.ForeignKey(Kanji, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=os.path.join(settings.UPLOAD_DIR, 'word'))
    word = models.CharField(max_length=255)
    mean = models.CharField(max_length=255)
