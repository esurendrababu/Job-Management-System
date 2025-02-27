# Generated by Django 5.1.6 on 2025-02-25 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_alter_job_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='company',
            field=models.CharField(default=3, max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='job',
            name='location',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
