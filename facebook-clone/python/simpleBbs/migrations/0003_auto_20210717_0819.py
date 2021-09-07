# Generated by Django 3.2.5 on 2021-07-17 08:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('simpleBbs', '0002_auto_20210714_1816'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='author',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='blog',
            name='img',
            field=models.ImageField(blank=True, upload_to='simpleBbs/%Y/%m/%d/2949'),
        ),
    ]