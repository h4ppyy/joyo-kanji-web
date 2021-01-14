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

'''
class Invoice(models.Model):
      person = models.ForeignKey(Person)
      ....

class InvoiceAdmin(admin.ModelAdmin):
      form = MyInvoiceAdminForm


class MyInvoiceAdminForm(forms.ModelForm):
    person = CustomModelChoiceField(queryset=Person.objects.all()) 
    class Meta:
          model = Invoice
      
class CustomModelChoiceField(forms.ModelChoiceField):
     def label_from_instance(self, obj):
         return "%s %s" % (obj.first_name, obj.last_name)
'''