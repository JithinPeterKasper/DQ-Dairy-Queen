# Generated by Django 3.1 on 2021-09-28 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20210924_1537'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='STATUS',
            field=models.CharField(choices=[('active', 'Active'), ('inactive', 'Inactive')], db_index=True, default='inactive', max_length=50, verbose_name='Username'),
        ),
    ]
