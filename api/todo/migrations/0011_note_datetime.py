# Generated by Django 3.2.9 on 2021-11-20 19:12

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0010_alter_note_column'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='datetime',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
