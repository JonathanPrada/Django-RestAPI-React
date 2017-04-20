from __future__ import unicode_literals
from django.db import models
import datetime


class Band(models.Model):
    # Max length 128 char, not blank, no bands with the same name
    name = models.CharField(max_length=128, null=False, blank=False, unique=True)
    # Gets set to the time when a new band is added to model
    date_added = models.DateField(auto_now_add=True)
    # Sets image url, allowed to be blank
    image = models.CharField(max_length=128, null=True, blank=True)
    # Bio text field
    bio = models.TextField(max_length=5000, null=True, blank=True)

