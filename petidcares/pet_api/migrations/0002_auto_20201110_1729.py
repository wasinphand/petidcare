# Generated by Django 2.2 on 2020-11-10 17:29

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pet_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='citizenID',
            field=models.CharField(max_length=13, primary_key=True, serialize=False, validators=[django.core.validators.MinLengthValidator(13)]),
        ),
        migrations.CreateModel(
            name='Pet',
            fields=[
                ('petID', models.CharField(max_length=10, primary_key=True, serialize=False, validators=[django.core.validators.MinLengthValidator(10)])),
                ('name', models.CharField(max_length=20)),
                ('age', models.IntegerField(validators=[django.core.validators.MaxValueValidator(99), django.core.validators.MinValueValidator(1)])),
                ('petType', models.CharField(max_length=20)),
                ('picture', models.ImageField(upload_to='')),
                ('citizenID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pet_api.User')),
            ],
        ),
    ]
