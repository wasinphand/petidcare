from rest_framework import serializers
from django.core.validators import MinLengthValidator, MaxValueValidator, MinValueValidator
from rest_framework.validators import UniqueValidator
from pet_api.models import Pet


class PetSerializer(serializers.Serializer):

    petID = serializers.CharField(max_length=10, validators=[
        MinLengthValidator(10), UniqueValidator(queryset=Pet.objects.all())])
    name = serializers.CharField(max_length=20)
    age = serializers.IntegerField(validators=[
        MaxValueValidator(99),
        MinValueValidator(1)
    ])
    petType = serializers.CharField(max_length=20)
    picture = serializers.ImageField(allow_empty_file=True)
    citizenID = serializers.CharField(max_length=13, validators=[
        MinLengthValidator(13)])

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance
