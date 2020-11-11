from django.db import models
from django.core.validators import MinLengthValidator, MaxValueValidator, MinValueValidator

#from django.contrib.auth.models import AbstractBaseUser
# Create your models here.


class User(models.Model):
    citizenID = models.CharField(
        max_length=13, validators=[MinLengthValidator(13)], primary_key=True)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    province = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=50)
    ownerFlag = models.BooleanField(default=True)
    ownerRating = models.FloatField()
    ctFlag = models.BooleanField(default=True)
    caretakerRating = models.FloatField()

    def __str__(self):
        return self.fname + " " + self.lname


class Pet(models.Model):
    petID = models.CharField(
        max_length=10, validators=[MinLengthValidator(10)], primary_key=True)
    name = models.CharField(max_length=20)
    age = models.IntegerField(validators=[
        MaxValueValidator(99),
        MinValueValidator(1)
    ])
    petType = models.CharField(max_length=20)
    picture = models.CharField(max_length=1000)
    citizenID = models.ForeignKey('User', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
