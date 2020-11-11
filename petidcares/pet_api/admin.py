from django.contrib import admin

from pet_api import models
# Register your models here.

admin.site.register(models.User)
admin.site.register(models.Pet)
